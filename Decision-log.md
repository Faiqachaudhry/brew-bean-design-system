Decision Log – Brew & Bean Cafe
Project: Design System & Component Library
1. Chosen Approach
We have chosen CSS Variables with React ThemeProvider for implementing the theming system.

2. Why CSS Variables?
Easy to maintain and update.
Support light and dark themes.
Reusable across different components.
Work directly with CSS.
No additional styling library is required.
3. CSS Variables vs CSS-in-JS
CSS Variables

CSS-in-JS

Native CSS feature

Uses JavaScript libraries

Easy theme switching

Theme switching through JS

Simple maintenance

Additional setup may be needed

Browser-supported

Depends on library

4. Final Decision
CSS Variables are selected because they provide a lightweight, reusable, and maintainable solution for Brew & Bean Cafe.

React ThemeProvider manages theme switching, while localStorage remembers the user’s selected theme.

5. Conclusion
This approach makes the design system easier for developers to maintain and extend in future projects.

