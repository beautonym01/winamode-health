import { CurrencyPrice } from "@/components/currency-provider";

const monthlySales = [
  ["Jun", 42], ["Jul", 57], ["Aug", 48], ["Sep", 66], ["Oct", 73], ["Nov", 86]
];

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-black/[0.05] bg-white p-5 sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="eyebrow">Store performance</p><h2 className="mt-2 font-display text-xl font-semibold">Sales overview</h2></div><select aria-label="Choose analytics date range" className="h-9 rounded-full border border-black/10 bg-white px-3 text-xs"><option>Last 6 months</option><option>Last 30 days</option><option>This year</option></select></div>
        <div className="mt-8 flex h-[240px] items-end justify-around gap-3 border-b border-l border-black/10 px-4 pb-0 pt-3">
          {monthlySales.map(([month, sales]) => <div key={month} className="flex h-full flex-1 flex-col items-center justify-end gap-2"><div title={`${sales}% of peak`} className="w-full max-w-[52px] rounded-t-lg bg-brand transition hover:bg-[#D4AF37]" style={{ height: `${sales}%` }} /><span className="pb-2 text-[10px] text-[#858d89]">{month}</span></div>)}
        </div>
        <div className="mt-5 flex flex-wrap gap-6 text-xs"><p><span className="text-[#858d89]">Gross sales</span><b className="ml-2"><CurrencyPrice amountInZmw={28460} /></b></p><p><span className="text-[#858d89]">Average order</span><b className="ml-2"><CurrencyPrice amountInZmw={154.67} /></b></p><p><span className="text-[#858d89]">Conversion</span><b className="ml-2">3.8%</b></p></div>
      </section>
      <section className="rounded-2xl border border-black/[0.05] bg-white p-5 sm:p-7">
        <h2 className="font-display text-lg font-semibold">Popular categories</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[["Vitamins & supplements", "32%", 82], ["Personal care", "26%", 68], ["Fitness & nutrition", "21%", 54], ["Medical devices", "12%", 38]].map(([category, share, progress]) => <div key={category} className="rounded-xl bg-[#F7F8F6] p-4"><div className="flex justify-between text-xs"><span className="font-medium">{category}</span><b>{share}</b></div><div className="mt-3 h-1.5 rounded-full bg-[#e6eae7]"><div className="h-1.5 rounded-full bg-brand" style={{ width: `${progress}%` }} /></div></div>)}
        </div>
      </section>
    </div>
  );
}
