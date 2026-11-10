import'./button.css';
export interface ButtonProps {
variant?: 'primary' | 'secondary';
size?: 'small' | 'medium' | 'large';
label: string;
disabled?: boolean;
type?: 'button' | 'submit' | 'reset';
onClick?: () => void;
'aria-label'?: string;
}

export const Button = ({
variant = 'primary',
size = 'medium',
label,
disabled = false,
type = 'button',
onClick,
'aria-label': ariaLabel,
}: ButtonProps) => {
return (
<button
type={type}
className={`storybook-button storybook-button--${size} storybook-button--${variant}`}
disabled={disabled}
onClick={onClick}
aria-label={ariaLabel}
>
{label}
</button>
);
};

