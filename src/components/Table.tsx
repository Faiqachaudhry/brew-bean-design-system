import { useState } from "react";
import "./table.css";

export interface CoffeeOrder {
id: number;
customer: string;
coffee: string;
quantity: number;
price: number;
status: string;
}

interface TableProps {
data: CoffeeOrder[];
}

type SortDirection = "ascending" | "descending";

type SortConfig = {
key: keyof CoffeeOrder;
direction: SortDirection;
};

const columns: {
key: keyof CoffeeOrder;
label: string;
}[] = [
{ key: "id", label: "Order ID" },
{ key: "customer", label: "Customer" },
{ key: "coffee", label: "Coffee" },
{ key: "quantity", label: "Quantity" },
{ key: "price", label: "Price" },
{ key: "status", label: "Status" },
];

function Table({ data }: TableProps) {
const [sortConfig, setSortConfig] = useState<SortConfig>({
key: "id",
direction: "ascending",
});

const handleSort = (key: keyof CoffeeOrder) => {
setSortConfig((current) => ({
key,
direction:
current.key === key && current.direction === "ascending"
? "descending"
: "ascending",
}));
};

const sortedData = [...data].sort((a, b) => {
const first = a[sortConfig.key];
const second = b[sortConfig.key];

const comparison =
typeof first === "number" && typeof second === "number"
? first - second
: String(first).localeCompare(String(second));

return sortConfig.direction === "ascending"
? comparison
: -comparison;
});

return (
<div className="table-container">
<table className="coffee-table">
<thead>
<tr>
{columns.map((column) => (
<th key={column.key} scope="col">
<button
type="button"
className="table-sort-button"
onClick={() => handleSort(column.key)}
aria-label={`Sort by ${column.label}`}
aria-sort={
sortConfig.key === column.key
? sortConfig.direction === "ascending"
? "ascending"
: "descending"
: "none"
}
>
{column.label}
<span aria-hidden="true">
{sortConfig.key === column.key
? sortConfig.direction === "ascending"
? " ↑"
: " ↓"
: " ↕"}
</span>
</button>
</th>
))}
</tr>
</thead>

<tbody>
{sortedData.length > 0 ? (
sortedData.map((order) => (
<tr key={order.id}>
<td>{order.id}</td>
<td>{order.customer}</td>
<td>{order.coffee}</td>
<td>{order.quantity}</td>
<td>Rs. {order.price}</td>
<td>
<span
className={`table-status table-status--${order.status.toLowerCase()}`}
>
{order.status}
</span>
</td>
</tr>
))
) : (
<tr>
<td colSpan={columns.length}>
No coffee orders available.
</td>
</tr>
)}
</tbody>
</table>
</div>
);
}

export default Table;

