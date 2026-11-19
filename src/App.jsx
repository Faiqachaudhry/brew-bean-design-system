import { useState } from "react";
import { useTheme } from "./components/ThemeProvider";
import Modal from "./components/Modal";
import Table from "./components/Table";
import orders from "./data/orders.json";

function App() {
const { theme, toggleTheme } = useTheme();
const [isModalOpen, setIsModalOpen] = useState(false);

return (
<main className="app">
<div className="container">

{/* Header */}
<header
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
flexWrap: "wrap",
gap: "16px",
}}
>
<h2>☕ Brew & Bean</h2>

<button
className="primary-button"
onClick={toggleTheme}
>
{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
</button>
</header>

{/* Hero Section */}
<section className="card">
<p style={{ color: "var(--color-secondary)" }}>
WELCOME TO BREW & BEAN
</p>

<h1
style={{
fontSize: "var(--font-size-title)",
margin: "16px 0",
}}
>
Coffee, Comfort & Connection.
</h1>

<p style={{ color: "var(--color-text-secondary)" }}>
Discover our design system with beautiful coffee-inspired
colours and reusable UI styles.
</p>

<button
className="primary-button"
style={{ marginTop: "24px" }}
onClick={() => setIsModalOpen(true)}
>
Explore Our Design
</button>
</section>

{/* Theme Preview */}
<section className="card">
<h2>Theme Preview</h2>

<p style={{ marginTop: "12px" }}>
Current Theme: <strong>{theme.toUpperCase()}</strong>
</p>

<p style={{ marginTop: "12px" }}>
Primary Color
</p>

<div
style={{
background: "var(--color-primary)",
height: "50px",
borderRadius: "8px",
marginTop: "10px",
}}
/>
</section>

{/* Task 3 - Modal */}
<section className="card">
<h2>Modal Component</h2>

<p style={{ color: "var(--color-text-secondary)" }}>
Explore our accessible modal component.
</p>

<button
className="primary-button"
onClick={() => setIsModalOpen(true)}
>
Open Modal
</button>
</section>

{/* Modal */}
<Modal
isOpen={isModalOpen}
onClose={() => setIsModalOpen(false)}
title="Welcome to Brew & Bean"
>
<p>
Explore our reusable components and coffee-inspired
design system.
</p>

<p>
Current theme: <strong>{theme.toUpperCase()}</strong>
</p>

<button
className="primary-button"
onClick={() => setIsModalOpen(false)}
>
Close Modal
</button>
</Modal>

{/* Task 3 - Coffee Orders Table */}
<section className="card">
<h2>Coffee Orders</h2>

<p style={{ color: "var(--color-text-secondary)" }}>
Explore and sort our coffee order data by clicking
any column heading.
</p>

<Table data={orders} />
</section>

</div>
</main>
);
}

export default App;


