import './select.css';

export interface SelectProps {
label: string;
options: { label: string; value: string }[];
value?: string;
disabled?: boolean;
required?: boolean;
error?: string;
id: string;
onChange?: (value: string) => void;
}

export const Select = ({
label,
options,
value,
disabled = false,
required = false,
error,
id,
onChange,
}: SelectProps) => {
return (
<div className="storybook-select-wrapper">
<label htmlFor={id}>
{label}
{required && <span>*</span>}
</label>

<select
id={id}
value={value}
disabled={disabled}
required={required}
aria-invalid={!!error}
aria-describedby={error ? `${id}-error` : undefined}
onChange={(e) => onChange?.(e.target.value)}
className={error ? 'storybook-select error' : 'storybook-select'}
>
<option value="">Select an option</option>

{options.map((option) => (
<option key={option.value} value={option.value}>
{option.label}
</option>
))}
</select>

{error && (
<p id={`${id}-error`} className="select-error">
{error}
</p>
)}
</div>
);
};
