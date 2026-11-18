import Link from "next/link";
import { FiActivity, FiCalendar, FiGrid, FiPackage, FiShoppingCart, FiUsers } from "react-icons/fi";

const adminLinks = [
  { href: "/admin", label: "Overview", icon: FiGrid },
  { href: "/admin/orders", label: "Orders", icon: FiShoppingCart },
  { href: "/admin/products", label: "Products", icon: FiPackage },
  { href: "/admin/customers", label: "Customers", icon: FiUsers },
  { href: "/admin/appointments", label: "Appointments", icon: FiCalendar },
  { href: "/admin/analytics", label: "Analytics", icon: FiActivity }
];

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container-width py-8 sm:py-10">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div><p className="eyebrow">Store management</p><h1 className="mt-2 font-display text-3xl font-semibold">Admin dashboard</h1></div>
        <span className="w-fit rounded-full border border-gold/40 bg-[#FBF4DA] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#806b19]">Demo data · no live backend</span>
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-[210px_1fr]">
        <nav aria-label="Admin navigation" className="flex gap-2 overflow-x-auto rounded-2xl border border-black/[0.05] bg-white p-2 lg:sticky lg:top-28 lg:flex-col">
          {adminLinks.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className="flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-semibold text-[#69716e] transition hover:bg-brand-light hover:text-brand"><Icon className="text-base" />{label}</Link>
          ))}
        </nav>
        <div className="min-w-0">{children}</div>
      </div>
      <p className="mt-6 text-[11px] leading-5 text-[#8b928f]">This sample dashboard is for demonstration only. Add authentication, authorization, a secure API, and a production database before using administrative features with real data.</p>
    </div>
  );
}
