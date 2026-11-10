import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta = {
title: 'Components/Select',
component: Select,
parameters: {
layout: 'centered',
},
tags: ['autodocs'],
args: {
id: 'demo-select',
options: [
{ label: 'React', value: 'react' },
{ label: 'JavaScript', value: 'javascript' },
{ label: 'TypeScript', value: 'typescript' },
],
},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
args: {
label: 'Choose a Technology',
},
};

export const Selected: Story = {
args: {
label: 'Selected Technology',
value: 'react',
},
};

export const Required: Story = {
args: {
label: 'Technology',
required: true,
},
};

export const Disabled: Story = {
args: {
label: 'Disabled Select',
disabled: true,
},
};

export const Error: Story = {
args: {
label: 'Technology',
error: 'Please select a technology',
},
};

export const ProgrammingLanguages: Story = {
args: {
label: 'Programming Language',
options: [
{ label: 'Python', value: 'python' },
{ label: 'Java', value: 'java' },
{ label: 'C++', value: 'cpp' },
],
},
};

