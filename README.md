# Htain Lin Aung — Developer Portfolio

Personal portfolio site built with React, Vite and Material UI.

**Live site:** [https://htainlin.netlify.app/]

## About

I've completed my BSc in Information Technology at Stamford International
University in Bangkok, with graduation in December 2026. This site showcases my
commercial and academic work, my skills, and how to get in touch.

## Tech stack

| Area | Tools |
|---|---|
| Framework | React 19, Vite 7 |
| UI | Material UI 7, MUI Icons |
| Tooling | ESLint, npm |

## Structure

```
src/
├── components/    Navbar, Footer, ProjectCard, Section, SectionTitle
├── sections/      About, Skills, Projects, Education, Contact
├── data/          projects.jsx, skills.jsx  (edit content here)
└── assets/        profile image, icons
```

Site content lives in `src/data/` — updating a project or a skill means
editing one array, not touching the components.

## Running locally

```bash
npm install
npm run dev        # start the dev server
npm run build      # production build into dist/
npm run preview    # preview the production build
npm run lint       # run ESLint
```

## Contact

- Email: hteinlin1124@gmail.com
- GitHub: https://github.com/hteinlin-aung
- LinkedIn: https://www.linkedin.com/in/htainlin-aung-9a7ba7272/
