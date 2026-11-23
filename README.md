Brew & Bean Design System – Task 3
About the Project
Brew & Bean Design System is a React and TypeScript-based project that demonstrates reusable and accessible UI components with light and dark theme support.

Components
1. Modal Component
Renders modal content using React Portal.
Supports opening and closing.
Closes using the Escape key.
Supports clicking outside to close.
Implements keyboard focus trapping.
Restores focus to the previously focused element.
Includes accessible dialog attributes.
2. Table Component
Displays coffee order information.
Supports sorting by column headers.
Supports ascending and descending sorting.
Handles numeric and text values.
Displays an empty state when no data is available.
Includes accessible sorting attributes.
Data Generation
Includes a generate-data.js script.
Generates 12 sample coffee orders.
Saves generated data in src/data/orders.json.
Run the script using:

node generate-data.js
Technologies Used
React
TypeScript
Vite
CSS
Storybook
JSON
Storybook
The project includes Storybook stories for:

Modal: OpenClose
Table: Sorting
Table: Empty
Run Storybook using:

npm run storybook
Build
To create a production build, run:

npm run build
Project Structure
brew-bean-design-system/
├── src/
│   ├── components/
│   │   ├── Modal.tsx
│   │   ├── modal.css
│   │   ├── Table.tsx
│   │   └── table.css
│   ├── data/
│   │   └── orders.json
│   └── stories/
│       ├── Modal.stories.tsx
│       └── Table.stories.tsx
├── generate-data.js
├── tokens.json
└── package.json
Author
Faiqa Abbas

## Lighthouse Performance

Lighthouse CI was run 3 times to evaluate the Storybook site.

| Category | Score |
|---|---:|
| Performance | 91 |
| Accessibility | 90 |
| Best Practices | 100 |
| SEO | 90 |

Performance score is the average of 3 Lighthouse runs (46, 48, and 66).

### Tools
- Storybook
- Lighthouse CI
- React
- Vite
- Netlify

[![Live Docs](https://img.shields.io/badge/Storybook-Live_Docs-FF4785?logo=storybook&logoColor=white)](https://storybookbrewbean.netlify.app/)

![Performance](https://img.shields.io/badge/Performance-30-orange)
![Accessibility](https://img.shields.io/badge/Accessibility-100-brightgreen)
![Best Practices](https://img.shields.io/badge/Best_Practices-100-brightgreen)
![SEO](https://img.shields.io/badge/SEO-90-brightgreen)