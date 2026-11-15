import { useEffect, useId, useRef } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

interface ModalProps {
isOpen: boolean;
onClose: () => void;
title?: string;
children: ReactNode;
}

function Modal({
isOpen,
onClose,
title,
children,
}: ModalProps) {
const modalRef = useRef<HTMLDivElement>(null);
const titleId = useId();

useEffect(() => {
if (!isOpen) return;

const previousFocus =
document.activeElement instanceof HTMLElement
? document.activeElement
: null;

const getFocusableElements = () => {
if (!modalRef.current) return [];

return Array.from(
modalRef.current.querySelectorAll<HTMLElement>(
'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
)
).filter(
(element) =>
element.getAttribute("aria-hidden") !== "true" &&
element.getAttribute("aria-disabled") !== "true"
);
};

const focusableElements = getFocusableElements();

if (focusableElements.length > 0) {
focusableElements[0].focus();
} else {
modalRef.current?.focus();
}

const handleKeyDown = (event: KeyboardEvent) => {
if (event.key === "Escape") {
event.preventDefault();
onClose();
return;
}

if (event.key === "Tab") {
const elements = getFocusableElements();

if (elements.length === 0) {
event.preventDefault();
modalRef.current?.focus();
return;
}

const firstElement = elements[0];
const lastElement = elements[elements.length - 1];

if (
event.shiftKey &&
(document.activeElement === firstElement ||
!modalRef.current?.contains(document.activeElement))
) {
event.preventDefault();
lastElement.focus();
} else if (
!event.shiftKey &&
(document.activeElement === lastElement ||
!modalRef.current?.contains(document.activeElement))
) {
event.preventDefault();
firstElement.focus();
}
}
};

document.addEventListener("keydown", handleKeyDown);

return () => {
document.removeEventListener("keydown", handleKeyDown);

if (previousFocus?.isConnected) {
previousFocus.focus();
}
};
}, [isOpen, onClose]);

if (!isOpen) return null;

return createPortal(
<div
className="modal-overlay"
onClick={(event) => {
if (event.target === event.currentTarget) {
onClose();
}
}}
>
<div
ref={modalRef}
className="modal-content"
role="dialog"
aria-modal="true"
aria-labelledby={title ? titleId : undefined}
aria-label={title ? undefined : "Dialog"}
tabIndex={-1}
>
<div className="modal-header">
{title && <h2 id={titleId}>{title}</h2>}

<button
type="button"
className="modal-close"
onClick={onClose}
aria-label="Close modal"
>
&times;
</button>
</div>

<div className="modal-body">
{children}
</div>
</div>
</div>,
document.body
);
}

export default Modal;
