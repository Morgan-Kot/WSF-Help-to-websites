/* Data Structures Version: v.10 | REWRITTEN_SINGLE_CONCEPT_QUESTIONS */

const styles = {
    "Minimalist": 0,
    "Modern": 0,
    "90s Retro": 0,
    "Y2K Retro": 0,
    "Brutalist": 0,
    "Neumorphic": 0,
    "Glassmorphic": 0,
    "Dark Mode": 0,
    "Sci-Fi Futuristic": 0,
    "Editorial Magazine": 0,
    "Hand-Drawn Organic": 0,
    "Corporate Traditional": 0,
};

const categories = {
    "Portfolio": 0,
    "Informational": 0,
    "Landing Page": 0,
    "Blog": 0,
    "Directory Listing": 0,
    "Software Showcase": 0,
    "Forum Community": 0,
    "Educational Training": 0,
    "News Media": 0,
    "Webshop": 0,
};

const questions = [
    {
        heading: "Website Vibe",
        text: "Do you want your website to look like a classic 1990s computer screen?",
        yesScores: { styles: { "90s Retro": 6 }, categories: {} },
        noScores: { styles: { "Modern": 1 }, categories: {} }
    },
    {
        heading: "Primary Goal",
        text: "Is this website mainly a gallery to show off your past work?",
        yesScores: { styles: { "Minimalist": 1 }, categories: { "Portfolio": 6 } },
        noScores: { styles: {}, categories: { "Informational": 1 } }
    },
    {
        heading: "Interface Shading",
        text: "Do you want your menus to look like see-through frosted glass?",
        yesScores: { styles: { "Glassmorphic": 6 }, categories: {} },
        noScores: { styles: { "Minimalist": 1 }, categories: {} }
    },
    {
        heading: "Content Type",
        text: "Will you be writing and posting new articles every week?",
        yesScores: { styles: { "Editorial Magazine": 1 }, categories: { "Blog": 6 } },
        noScores: { styles: {}, categories: { "Landing Page": 1 } }
    },
    {
        heading: "Additional style",
        text: "Are you building a daily news platform?",
        yesScores: { styles: { "Editorial Magazine": 2 }, categories: { "News Media": 6 } },
        noScores: { styles: {}, categories: { "Landing Page": 1 } }
    },
    {
        heading: "Color Philosophy",
        text: "Should the background of your website be dark by default?",
        yesScores: { styles: { "Dark Mode": 6 }, categories: {} },
        noScores: { styles: { "Minimalist": 1 }, categories: {} }
    },
    {
        heading: "Product Sales",
        text: "Will visitors buy things directly on this website?",
        yesScores: { styles: { "Modern": 4 }, categories: { "Webshop": 12 } },
        noScores: { styles: {}, categories: { "Informational": 1 } }
    },
    {
        heading: "Visual Depth",
        text: "Should the buttons look like physical plastic keys you can actually press?",
        yesScores: { styles: { "Neumorphic": 6 }, categories: {} },
        noScores: { styles: { "Modern": 1 }, categories: {} }
    },
    {
        heading: "Product Hype",
        text: "Is the only goal of this site to get sign-ups for one specific product?",
        yesScores: { styles: { "Modern": 2 }, categories: { "Landing Page": 6 } },
        noScores: { styles: {}, categories: { "Informational": 1 } }
    },
    {
        heading: "Raw Aesthetics",
        text: "Do you want a raw and rebellious look that breaks all traditional design rules?",
        yesScores: { styles: { "Brutalist": 6 }, categories: {} },
        noScores: { styles: { "Corporate Traditional": 1 }, categories: {} }
    },
    {
        heading: "Community Hub",
        text: "Will users be able to talk to each other on message boards here?",
        yesScores: { styles: {}, categories: { "Forum Community": 6 } },
        noScores: { styles: {}, categories: { "Informational": 1 } }
    },
    {
        heading: "Nostalgic Tech",
        text: "Do you want a shiny, metallic year-2000 aesthetic?",
        yesScores: { styles: { "Y2K Retro": 6 }, categories: {} },
        noScores: { styles: { "Modern": 1 }, categories: {} }
    },
    {
        heading: "Data Organization",
        text: "Is this site a search directory for finding local businesses or real estate?",
        yesScores: { styles: {}, categories: { "Directory Listing": 6 } },
        noScores: { styles: {}, categories: { "Landing Page": 1 } }
    },
    {
        heading: "Organic Textures",
        text: "Do you want the site to look like it was sketched by hand?",
        yesScores: { styles: { "Hand-Drawn Organic": 6 }, categories: {} },
        noScores: { styles: { "Minimalist": 1 }, categories: {} }
    },
    {
        heading: "Knowledge Sharing",
        text: "Will you be hosting structured online video courses?",
        yesScores: { styles: {}, categories: { "Educational Training": 6 } },
        noScores: { styles: {}, categories: { "Informational": 1 } }
    },
    {
        heading: "Corporate Trust",
        text: "Does this site need to look like a strict, traditional law firm or bank?",
        yesScores: { styles: { "Corporate Traditional": 6 }, categories: {} },
        noScores: { styles: { "Modern": 1 }, categories: {} }
    },
    {
        heading: "Application Display",
        text: "Is this website simply an advertisement for a software program?",
        yesScores: { styles: { "Sci-Fi Futuristic": 2 }, categories: { "Software Showcase": 6 } },
        noScores: { styles: {}, categories: { "Landing Page": 1 } }
    },
    {
        heading: "Sci-Fi Vibe",
        text: "Do you want glowing neon colors like a sci-fi movie?",
        yesScores: { styles: { "Sci-Fi Futuristic": 6 }, categories: {} },
        noScores: { styles: { "Modern": 1 }, categories: {} }
    },
    {
        heading: "Typography Focus",
        text: "Do you want it to read like a high-end printed fashion magazine?",
        yesScores: { styles: { "Editorial Magazine": 6 }, categories: {} },
        noScores: { styles: { "Minimalist": 1 }, categories: {} }
    },
    {
        heading: "Content Breadth",
        text: "Is this site essentially just a digital business card with your contact info?",
        yesScores: { styles: {}, categories: { "Informational": 6 } },
        noScores: { styles: {}, categories: { "Landing Page": 1 } }
    },
    {
        heading: "Clean Space",
        text: "Do you want a completely empty-looking screen with only very thin text?",
        yesScores: { styles: { "Minimalist": 6 }, categories: {} },
        noScores: { styles: { "Modern": 1 }, categories: {} }
    },
    {
        heading: "Digital Marketplace",
        text: "Do you need a functional shopping cart system?",
        yesScores: { styles: { "Modern": 4 }, categories: { "Webshop": 12 } },
        noScores: { styles: {}, categories: { "Landing Page": 1 } }
    },
    {
        heading: "Creative Portfolio",
        text: "Is this site meant to be your personal digital resume?",
        yesScores: { styles: {}, categories: { "Portfolio": 6 } },
        noScores: { styles: {}, categories: { "Informational": 1 } }
    },
    {
        heading: "Interactive Community",
        text: "Are user profile pages the main feature of the site?",
        yesScores: { styles: {}, categories: { "Forum Community": 6 } },
        noScores: { styles: {}, categories: { "Blog": 1 } }
    },
    {
        heading: "Modern Baseline",
        text: "Do you just want a safe, standard, modern-looking website?",
        yesScores: { styles: { "Modern": 6 }, categories: {} },
        noScores: { styles: { "Brutalist": 1 }, categories: {} }
    }
];