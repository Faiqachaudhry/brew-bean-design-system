import type { Meta, StoryObj } from "@storybook/react";
import Table from "../components/Table";
import orders from "../data/orders.json";

const meta = {
title: "Components/Table",
component: Table,
parameters: {
layout: "padded",
},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sorting: Story = {
args: {
data: orders,
},
};

export const Empty: Story = {
args: {
data: [],
},
};

