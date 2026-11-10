import type { Preview } from '@storybook/react-vite';
import { ThemeProvider, useTheme } from '../src/components/ThemeProvider';

function ThemeSwitcher() {
const { theme, toggleTheme } = useTheme();

return (
<div style={{ padding: '16px' }}>
<button onClick={toggleTheme}>
Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
</button>
</div>
);
}

const preview: Preview = {
decorators: [
(Story) => (
<ThemeProvider>
<ThemeSwitcher />
<Story />
</ThemeProvider>
),
],

parameters: {
controls: {
matchers: {
color: /(background|color)$/i,
date: /Date$/i,
},
},
a11y: {
test: 'todo',
},
},
};

export default preview;

