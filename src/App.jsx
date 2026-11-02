import { useTheme } from "./components/ThemeProvider";

function App() {
const { theme, toggleTheme } = useTheme();

return (
<main className="app">
<div className="container">

<header style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
flexWrap: "wrap",
gap: "16px"
}}>
<h2>☕ Brew & Bean</h2>

<button
className="primary-button"
onClick={toggleTheme}
>
{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
</button>
</header>

<section className="card">
<p style={{ color: "var(--color-secondary)" }}>
WELCOME TO BREW & BEAN
</p>

<h1 style={{
fontSize: "var(--font-size-title)",
margin: "16px 0"
}}>
Coffee, Comfort & Connection.
</h1>

<p style={{ color: "var(--color-text-secondary)" }}>
Discover our design system with beautiful coffee-inspired
colours and reusable UI styles.
</p>

<button
className="primary-button"
style={{ marginTop: "24px" }}
>
Explore Our Design
</button>
</section>

<section className="card">
<h2>Theme Preview</h2>

<p style={{ marginTop: "12px" }}>
Current Theme: <strong>{theme.toUpperCase()}</strong>
</p>

<p style={{ marginTop: "12px" }}>
Primary Color
</p>

<div style={{
background: "var(--color-primary)",
height: "50px",
borderRadius: "8px",
marginTop: "10px"
}} />
</section>

</div>
</main>
);
}

export default App;


