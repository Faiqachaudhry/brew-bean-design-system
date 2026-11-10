import './input.css';

export interface InputProps {
label: string;
placeholder?: string;
value?: string;
type?: 'text' | 'email' | 'password' | 'number';
disabled?: boolean;
required?: boolean;
error?: string;
id: string;
onChange?: (value: string) => void;
}

export const Input = ({
label,
placeholder = 'Enter your text',
value,
type = 'text',
disabled = false,
required = false,
error,
id,
onChange,
}: InputProps) => {
return (
<div className="storybook-input-wrapper">
<label htmlFor={id}>
{label}
{required && <span>*</span>}
</label>

<input
id={id}
type={type}
placeholder={placeholder}
value={value}
disabled={disabled}
required={required}
aria-invalid={!!error}
aria-describedby={error ? `${id}-error` : undefined}
onChange={(e) => onChange?.(e.target.value)}
className={error ? 'storybook-input error' : 'storybook-input'}
/>

{error && (
<p id={`${id}-error`} className="input-error">
{error}
</p>
)}
</div>
);
};