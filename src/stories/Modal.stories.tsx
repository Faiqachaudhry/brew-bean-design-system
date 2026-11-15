import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from "../components/Modal";
import { Button } from "./Button";

const meta: Meta = {
title: "Components/Modal",
component: Modal,
parameters: {
layout: "centered",
},
};

export default meta;

type Story = StoryObj;

function ModalDemo() {
const [isOpen, setIsOpen] = useState(false);

return (
<>
<Button
variant="primary"
label="Open Modal"
onClick={() => setIsOpen(true)}
/>

<Modal
isOpen={isOpen}
onClose={() => setIsOpen(false)}
title="Coffee Order Details"
>
<p>Your coffee order is ready!</p>
<p>Thank you for choosing Brew & Bean.</p>

<Button
variant="secondary"
label="Close Modal"
onClick={() => setIsOpen(false)}
/>
</Modal>
</>
);
}

export const OpenClose: Story = {
render: () => <ModalDemo />,
};

