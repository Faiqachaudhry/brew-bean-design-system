Brew & Bean Cafe – Design System
About the Project
Brew & Bean Cafe Design System is a reusable and themable React-based UI library designed to maintain consistent branding, accessibility, and styling across digital products.

Features
Design tokens for colours, spacing, and typography
Light and Dark theme support
React ThemeProvider
CSS Variables-based theming
Theme preference saved using localStorage
Reusable Button component
Reusable Input component
Reusable Select component
Multiple component variants and states
Storybook component documentation
Keyboard navigation support
ARIA accessibility attributes
Accessibility testing with zero reported violations in tested stories
Components
Button
Primary and Secondary variants
Small, Medium, and Large sizes
Disabled state
Click event support
Input
Text, Email, Password, and Number types
Required state
Disabled state
Error message support
Select
Custom dropdown options
Selected state
Required state
Disabled state
Error message support
Technologies Used
React
TypeScript
Vite
CSS3
JSON
Storybook
LocalStorage
Project Structure
brew-bean-design-system/
├── public/
├── src/
│   ├── components/
│   │   └── ThemeProvider.jsx
│   ├── stories/
│   │   ├── Button.tsx
│   │   ├── button.css
│   │   ├── Button.stories.ts
│   │   ├── Input.tsx
│   │   ├── input.css
│   │   ├── Input.stories.ts
│   │   ├── Select.tsx
│   │   ├── select.css
│   │   └── Select.stories.ts
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .storybook/
│   └── preview.tsx
├── tokens.json
├── Decision-log.md
├── README.md
└── package.json
Installation
Clone the repository:

git clone https://github.com/Faiqachaudhry/brew-bean-design-system.git
Install dependencies:

npm install
Start the development server:

npm run dev
Start Storybook:

npm run storybook
Theming Strategy
The project uses CSS Variables managed through a React ThemeProvider. Users can switch between Light and Dark themes, and their preference is stored in localStorage.

Design tokens are maintained in tokens.json to ensure consistent colours, spacing, and typography.

Accessibility
Keyboard navigation support
Visible focus indicators
ARIA labels and attributes
Accessible colour contrast
Accessibility checks through Storybook
Author
Faiqa Abbas

Frontend Development Intern

Project
Brew & Bean Cafe – Task 1: Design Tokens and Theming Strategy

Brew & Bean Cafe – Task 2: Reusable UI Components and Storybook Documentation

