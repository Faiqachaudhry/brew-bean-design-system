import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
title: 'Components/Input',
component: Input,
parameters: {
layout: 'centered',
},
tags: ['autodocs'],
args: {
id: 'demo-input',
},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
args: {
label: 'Full Name',
placeholder: 'Enter your name',
},
};

export const Email: Story = {
args: {
label: 'Email Address',
type: 'email',
placeholder: 'Enter your email',
},
};

export const Password: Story = {
args: {
label: 'Password',
type: 'password',
placeholder: 'Enter password',
},
};

export const Required: Story = {
args: {
label: 'Username',
required: true,
},
};

export const Disabled: Story = {
args: {
label: 'Disabled Input',
disabled: true,
value: 'Not editable',
},
};

export const Error: Story = {
args: {
label: 'Email Address',
type: 'email',
error: 'Please enter a valid email address',
},
};
