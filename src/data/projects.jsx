export const projects = [
  {
    title: "StockRoom — Inventory & Stock Manager",
    description:
      "Full-stack inventory system, built solo and deployed. Stock is never stored as a number: it is derived from an append-only movement ledger, so every change is traceable and the API refuses any stock-out that would take an item negative.",
    tech: ["React", "MUI", "Vite", "React Router", "Node.js", "Express", "SQLite"],
    github: "https://github.com/hteinlin-aung/stockroom",
    demo: "https://stockroom-hteinlin.netlify.app",
  },
  {
    title: "Local AI Agent — Mac Assistant",
    description:
      "A chat agent that answers questions about my Mac. A local model decides which tool to call — disk space, memory pressure, running apps, file search — and Node.js runs it behind step limits, input validation and a permission gate for anything that touches files. Built by hand, no agent framework.",
    tech: ["Node.js", "JavaScript", "Ollama", "Tool Calling", "Prompt Engineering"],
    github: "https://github.com/hteinlin-aung/AI_Agent_Build",
    demo: "",
  },
  {
    title: "KBS IMPEX Point-of-Sale System",
    description:
      "Commercial point-of-sale and business management platform, built with colleague during my internship at NK Software House.",
    tech: ["React", "MUI", "Vite", "React Router", "Axios", "Postman"],
    github: "https://github.com/hteinlin-aung/kbs-impex-casestudy",
    demo: "",
  },
  {
    title: "MMNovaCity Real Estate Portal",
    description:
      "Live commercial real estate portal. Built during internship with colleague and delivered responsive layouts with hover animations and floating action buttons.",
    tech: ["React", "MUI", "Vite", "React Router"],
    github: "https://github.com/hteinlin-aung/mmnovacity-casestudy",
    demo: "https://mmnovacity.com/",
  },
]
