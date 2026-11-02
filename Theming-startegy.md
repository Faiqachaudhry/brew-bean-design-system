# Theming Strategy – Brew & Bean Cafe

## 1. Overview

Brew & Bean Cafe uses a design token-based theming system to maintain consistent colours, spacing, and typography throughout the application.

The system supports both Light Mode and Dark Mode.

## 2. Design Tokens

Design tokens are stored in the `tokens.json` file.

The tokens are organized into three main categories:

- **Colors:** Defines primary, secondary, accent, background, surface, text, border, success, error, and warning colours.
- **Spacing:** Defines reusable spacing values from xs to 3xl.
- **Typography:** Defines reusable font sizes for small text, body text, headings, titles, and display text.

This structure makes design updates easier and more consistent.

## 3. CSS Variables

CSS Variables are used to apply design tokens throughout the application.

The React ThemeProvider reads the selected theme's colour tokens and dynamically creates CSS variables on the root HTML element.

Examples:

- `--color-primary`
- `--color-background`
- `--color-text`
- `--spacing-md`
- `--font-size-heading`

Components use these variables instead of hardcoded design values wherever possible.

## 4. Light and Dark Themes

The application provides two themes:

**Light Mode**
- Warm coffee-inspired colours
- Light background and surfaces
- Dark text for readability

**Dark Mode**
- Dark background and surfaces
- Light text
- Warm accent colours

Users can switch between themes using the theme toggle button.

## 5. Theme Persistence

The selected theme is saved in browser localStorage using the key:

`brew-bean-theme`

When the application loads again, ThemeProvider reads the saved preference and restores the selected theme.

## 6. React ThemeProvider

The `ThemeProvider.jsx` component manages:

- Current theme state
- CSS variable updates
- Theme switching
- Saving the selected theme in localStorage

The `useTheme` hook allows React components to access the current theme and toggle function.

## 7. Benefits

- Consistent design across components
- Easy maintenance and updates
- Reusable design tokens
- Support for Light and Dark Mode
- User theme preference persistence
- Scalable foundation for future UI components

## 8. Conclusion

This theming strategy provides a reusable and maintainable foundation for the Brew & Bean Cafe Design System. It separates design values from component styles and makes future design changes easier.

