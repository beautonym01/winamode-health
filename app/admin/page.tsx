import Link from "next/link";
import { FiArrowUpRight, FiCalendar, FiShoppingBag, FiUsers } from "react-icons/fi";
import { CurrencyPrice } from "@/components/currency-provider";

const stats = [
  { label: "Total sales", value: 28460, change: "+12.8% this month", icon: FiShoppingBag },
  { label: "Orders", value: "184", change: "+8.2% this month", icon: FiShoppingBag },
  { label: "Customers", value: "1,260", change: "+5.4% this month", icon: FiUsers },
  { label: "Appointments", value: "26", change: "8 upcoming", icon: FiCalendar }
];

const recentOrders = [
  { id: "WM-2048", customer: "Chanda M.", date: "Today, 10:42", amount: 234, status: "Processing" },
  { id: "WM-2047", customer: "Mwila B.", date: "Today, 09:18", amount: 420, status: "Shipped" },
  { id: "WM-2046", customer: "Zara K.", date: "Yesterday", amount: 155, status: "Delivered" },
  { id: "WM-2045", customer: "Bwalya D.", date: "Yesterday", amount: 310, status: "Processing" }
];

export default function AdminOverviewPage() {
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => <article key={stat.label} className="rounded-2xl border border-black/[0.05] bg-white p-5"><div className="flex items-center justify-between"><p className="text-xs text-[#818985]">{stat.label}</p><stat.icon className="text-brand" /></div><p className="mt-3 font-display text-2xl font-semibold">{typeof stat.value === "number" ? <CurrencyPrice amountInZmw={stat.value} /> : stat.value}</p><p className="mt-2 text-[10px] font-semibold text-brand">{stat.change}</p></article>)}
      </div>
      <div className="mt-6 grid gap-5 xl:grid-cols-[1.4fr_0.8fr]">
        <section className="overflow-hidden rounded-2xl border border-black/[0.05] bg-white">
          <div className="flex items-center justify-between p-5"><h2 className="font-display text-base font-semibold">Recent orders</h2><Link href="/admin/orders" className="inline-flex items-center gap-1 text-xs font-semibold text-brand">View all <FiArrowUpRight /></Link></div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-xs">
              <thead className="bg-[#F7F8F6] text-[10px] uppercase tracking-wider text-[#8a918e]"><tr><th className="px-5 py-3 font-semibold">Order</th><th className="px-5 py-3 font-semibold">Customer</th><th className="px-5 py-3 font-semibold">Date</th><th className="px-5 py-3 font-semibold">Total</th><th className="px-5 py-3 font-semibold">Status</th></tr></thead>
              <tbody className="divide-y divide-black/5">{recentOrders.map((order) => <tr key={order.id}><td className="px-5 py-4 font-semibold text-brand">{order.id}</td><td className="px-5 py-4">{order.customer}</td><td className="px-5 py-4 text-[#7c8481]">{order.date}</td><td className="px-5 py-4 font-semibold"><CurrencyPrice amountInZmw={order.amount} /></td><td className="px-5 py-4"><span className="rounded-full bg-brand-light px-2.5 py-1 text-[10px] font-semibold text-brand">{order.status}</span></td></tr>)}</tbody>
            </table>
          </div>
        </section>
        <section className="rounded-2xl border border-black/[0.05] bg-white p-5">
          <div className="flex items-center justify-between"><h2 className="font-display text-base font-semibold">Top categories</h2><Link href="/admin/analytics" className="text-xs font-semibold text-brand">Details</Link></div>
          <div className="mt-5 space-y-4">
            {[["Vitamins & supplements", 78], ["Personal care", 62], ["Fitness & nutrition", 51], ["Medical devices", 36]].map(([label, percent]) => <div key={label}><div className="mb-2 flex justify-between text-xs"><span>{label}</span><span className="font-semibold">{percent}%</span></div><div className="h-2 overflow-hidden rounded-full bg-[#ECF0ED]"><div className="h-full rounded-full bg-brand" style={{ width: `${percent}%` }} /></div></div>)}
          </div>
        </section>
      </div>
    </div>
  );
}
