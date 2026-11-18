import { CurrencyPrice } from "@/components/currency-provider";

const customers: [string, string, string, number, number][] = [
  ["Chanda M.", "chanda.m@example.com", "Lusaka", 12, 1840],
  ["Mwila B.", "mwila.b@example.com", "Ndola", 8, 1220],
  ["Zara K.", "zara.k@example.com", "Kitwe", 6, 980],
  ["Bwalya D.", "bwalya.d@example.com", "Lusaka", 4, 640],
  ["Leya S.", "leya.s@example.com", "Livingstone", 3, 420]
];

export default function AdminCustomersPage() {
  return (
    <section className="overflow-hidden rounded-2xl border border-black/[0.05] bg-white">
      <div className="p-5"><h2 className="font-display text-lg font-semibold">Customers</h2><p className="mt-1 text-xs text-[#818985]">A sample view of customer activity.</p></div>
      <div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left text-xs"><thead className="bg-[#F7F8F6] text-[10px] uppercase tracking-wider text-[#8a918e]"><tr>{["Customer", "Email", "Location", "Orders", "Lifetime value"].map((item) => <th key={item} className="px-5 py-3 font-semibold">{item}</th>)}</tr></thead><tbody className="divide-y divide-black/5">{customers.map(([name, email, location, count, value]) => <tr key={email}><td className="px-5 py-4 font-semibold">{name}</td><td className="px-5 py-4 text-[#737b78]">{email}</td><td className="px-5 py-4">{location}</td><td className="px-5 py-4">{count}</td><td className="px-5 py-4 font-semibold"><CurrencyPrice amountInZmw={value} /></td></tr>)}</tbody></table></div>
    </section>
  );
}
