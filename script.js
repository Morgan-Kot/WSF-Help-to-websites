/* Main Logic Version: v.16 | TEXT_FILE_DOWNLOAD_SYSTEM_ADDED */

let currentQuestionIndex = 0;
let answerHistory = [];

function toggleTheme() {
    const body = document.body;
    if (body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme");
    } else {
        body.setAttribute("data-theme", "dark");
    }
}

function renderQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQ = questions[currentQuestionIndex];
        document.getElementById("question-heading").innerText = currentQ.heading;
        document.getElementById("question-text").innerText = currentQ.text;
        updateProgressBar();
    } else {
        showResult();
    }
}

function updateProgressBar() {
    const currentTotal = currentQuestionIndex + 1;
    const maxTotal = questions.length;
    const directPercentage = (currentQuestionIndex / maxTotal) * 100;
    
    document.getElementById("progress-text").innerText = `Question ${currentTotal} of ${maxTotal}`;
    document.getElementById("progress-bar-fill").style.width = `${directPercentage}%`;
    
    const backBtn = document.getElementById("btn-back");
    if (currentQuestionIndex > 0) {
        backBtn.style.display = "inline-block";
    } else {
        backBtn.style.display = "none";
    }
}

function saveHistoryState() {
    const currentStylesSnapshot = JSON.parse(JSON.stringify(styles));
    const currentCategoriesSnapshot = JSON.parse(JSON.stringify(categories));
    
    answerHistory.push({
        styleScores: currentStylesSnapshot,
        categoryScores: currentCategoriesSnapshot
    });
}

function answer(isYes) {
    const currentQ = questions[currentQuestionIndex];
    const targetScores = isYes ? currentQ.yesScores : currentQ.noScores;

    saveHistoryState();

    for (const style in targetScores.styles) {
        styles[style] += targetScores.styles[style];
    }

    for (const category in targetScores.categories) {
        categories[category] += targetScores.categories[category];
    }

    currentQuestionIndex++;
    renderQuestion();
}

function skip() {
    if (currentQuestionIndex >= questions.length) return;
    
    saveHistoryState();
    
    currentQuestionIndex++;
    renderQuestion();
}

function undo() {
    if (answerHistory.length === 0) return;
    
    const previousStateSnapshot = answerHistory.pop();
    
    for (const style in styles) {
        styles[style] = previousStateSnapshot.styleScores[style] || 0;
    }
    for (const category in categories) {
        categories[category] = previousStateSnapshot.categoryScores[category] || 0;
    }
    
    currentQuestionIndex--;
    renderQuestion();
}

function generateTags() {
    let tagString = [];
    for (const [key, value] of Object.entries(styles)) {
        if (value > 0) tagString.push(`${key.replace(/\s+/g, '')}=${value}`);
    }
    for (const [key, value] of Object.entries(categories)) {
        if (value > 0) tagString.push(`${key.replace(/\s+/g, '')}=${value}`);
    }
    return tagString.join(", ");
}

function getTopTwo(dataObject) {
    const sorted = Object.entries(dataObject).sort((a, b) => {
        if (b[1] === a[1]) {
            return a[0].localeCompare(b[0]); 
        }
        return b[1] - a[1];
    });

    return {
        ideal: sorted[0] && sorted[0][1] > 0 ? sorted[0][0] : "Standard",
        alt: sorted[1] && sorted[1][1] > 0 ? sorted[1][0] : null
    };
}

function showResult() {
    document.getElementById("progress-container").style.display = "none";
    document.getElementById("question-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";

    const topStyles = getTopTwo(styles);
    const topCategories = getTopTwo(categories);

    document.getElementById("result-title").innerText = `${topStyles.ideal} ${topCategories.ideal}`;
    
    const altElement = document.getElementById("result-alt");
    if (topStyles.alt || topCategories.alt) {
        const altStyle = topStyles.alt || topStyles.ideal;
        const altCat = topCategories.alt || topCategories.ideal;
        altElement.innerText = `Strong Alternative: ${altStyle} ${altCat}`;
    } else {
        altElement.style.display = "none";
    }

    document.getElementById("creator-tags").value = generateTags();
}

function toggleUI(show) {
    const mainApp = document.getElementById("app");
    const themeControls = document.getElementById("theme-controls");
    const showUiBtn = document.getElementById("btn-show-ui");

    if (show) {
        mainApp.style.display = "block";
        themeControls.style.display = "block";
        showUiBtn.style.display = "none";
    } else {
        mainApp.style.display = "none";
        themeControls.style.display = "none";
        showUiBtn.style.display = "block";
    }
}

function downloadClientFile() {
    const name = document.getElementById("client-name").value.trim();
    const contact = document.getElementById("client-contact").value.trim();
    const budget = document.getElementById("client-budget").value.trim();
    const website = document.getElementById("client-website").value.trim();
    const note = document.getElementById("client-note").value.trim();
    const tags = document.getElementById("creator-tags").value;
    const resultTitle = document.getElementById("result-title").innerText;

    // Basic validation
    if (!name || !contact) {
        alert("Please enter your Name and Contact Info before downloading.");
        return;
    }

    // Format the text string exactly as requested
    let fileContent = `Client_Name: ${name}\n`;
    fileContent += `Client_Contact: ${contact}\n`;
    fileContent += `Data_tags: ${tags}\n`;
    fileContent += `Client_result: ${resultTitle}\n`;
    fileContent += `Optional:\n`;
    fileContent += `Client_budget: ${budget}\n`;
    fileContent += `Client_Website: ${website}\n`;
    fileContent += `Client_Note: ${note}\n`;

    // Create a Blob and generate a download link
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    // Format filename like: John_Doe_Website_Data.txt
    a.download = `${name.replace(/\s+/g, '_')}_Website_Data.txt`;
    
    // Trigger download
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

renderQuestion();