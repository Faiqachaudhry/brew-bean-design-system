Brew & Bean Cafe – Design System
About the Project
Brew & Bean Cafe Design System is a reusable and themable React-based UI foundation designed to maintain consistent branding across digital products.

Features
Design tokens for colours, spacing, and typography
Light and Dark theme support
React ThemeProvider
CSS Variables-based theming
Theme preference saved using localStorage
Responsive cafe-inspired interface
Reusable styling through CSS variables
Technologies Used
React
Vite
JavaScript
CSS3
JSON
LocalStorage
Project Structure
brew-bean-design-system/
├── public/
├── src/
│   ├── components/
│   │   └── ThemeProvider.jsx
│   ├── styles/
│   │   └── style.css
│   ├── App.jsx
│   └── main.jsx
├── tokens.json
├── Decision-log.md
├── README.md
└── package.json
Installation
npm install
npm run dev
Theming Strategy
The project uses CSS Variables managed through a React ThemeProvider. Users can switch between light and dark themes, and their preference is stored in localStorage.

Author
Faiqa Abbas

Frontend Development Intern

Project
Brew & Bean Cafe – Task 1: Design Tokens and Theming Strategy