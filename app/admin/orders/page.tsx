import { CurrencyPrice } from "@/components/currency-provider";

const orders: [string, string, string, number, string][] = [
  ["WM-2048", "Chanda M.", "17 Nov 2026", 234, "Processing"],
  ["WM-2047", "Mwila B.", "17 Nov 2026", 420, "Shipped"],
  ["WM-2046", "Zara K.", "16 Nov 2026", 155, "Delivered"],
  ["WM-2045", "Bwalya D.", "16 Nov 2026", 310, "Processing"],
  ["WM-2044", "Leya S.", "15 Nov 2026", 89, "Delivered"],
  ["WM-2043", "Mwamba O.", "15 Nov 2026", 285, "Cancelled"]
];

export default function AdminOrdersPage() {
  return (
    <section className="overflow-hidden rounded-2xl border border-black/[0.05] bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 p-5"><div><h2 className="font-display text-lg font-semibold">Orders</h2><p className="mt-1 text-xs text-[#818985]">Review and manage recent purchases.</p></div><select aria-label="Filter orders by status" className="h-9 rounded-full border border-black/10 bg-white px-3 text-xs"><option>All orders</option><option>Processing</option><option>Shipped</option><option>Delivered</option></select></div>
      <div className="overflow-x-auto"><table className="w-full min-w-[650px] text-left text-xs"><thead className="bg-[#F7F8F6] text-[10px] uppercase tracking-wider text-[#8a918e]"><tr>{["Order", "Customer", "Date", "Total", "Status", "Action"].map((item) => <th key={item} className="px-5 py-3 font-semibold">{item}</th>)}</tr></thead><tbody className="divide-y divide-black/5">{orders.map(([id, name, date, total, status]) => <tr key={id}><td className="px-5 py-4 font-semibold text-brand">{id}</td><td className="px-5 py-4">{name}</td><td className="px-5 py-4 text-[#7c8481]">{date}</td><td className="px-5 py-4 font-semibold"><CurrencyPrice amountInZmw={total} /></td><td className="px-5 py-4"><span className="rounded-full bg-brand-light px-2.5 py-1 text-[10px] font-semibold text-brand">{status}</span></td><td className="px-5 py-4"><button type="button" className="font-semibold text-brand">View</button></td></tr>)}</tbody></table></div>
    </section>
  );
}
