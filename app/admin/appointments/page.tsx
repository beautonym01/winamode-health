const appointments = [
  ["AP-089", "Abena S.", "Nutrition consultation", "18 Nov 2026 · 10:00", "Confirmed"],
  ["AP-088", "Yaw D.", "Wellness consultation", "18 Nov 2026 · 14:30", "Pending"],
  ["AP-087", "Ama K.", "Lifestyle coaching", "19 Nov 2026 · 11:00", "Confirmed"],
  ["AP-086", "Kojo B.", "Nutrition consultation", "20 Nov 2026 · 09:30", "Pending"],
  ["AP-085", "Esi A.", "Wellness consultation", "21 Nov 2026 · 13:00", "Completed"]
];

export default function AdminAppointmentsPage() {
  return (
    <section className="overflow-hidden rounded-2xl border border-black/[0.05] bg-white">
      <div className="p-5"><h2 className="font-display text-lg font-semibold">Appointments</h2><p className="mt-1 text-xs text-[#818985]">Upcoming and recent consultation requests.</p></div>
      <div className="overflow-x-auto"><table className="w-full min-w-[650px] text-left text-xs"><thead className="bg-[#F7F8F6] text-[10px] uppercase tracking-wider text-[#8a918e]"><tr>{["Reference", "Customer", "Service", "Requested time", "Status"].map((item) => <th key={item} className="px-5 py-3 font-semibold">{item}</th>)}</tr></thead><tbody className="divide-y divide-black/5">{appointments.map(([id, name, service, date, status]) => <tr key={id}><td className="px-5 py-4 font-semibold text-brand">{id}</td><td className="px-5 py-4">{name}</td><td className="px-5 py-4 text-[#737b78]">{service}</td><td className="px-5 py-4">{date}</td><td className="px-5 py-4"><span className="rounded-full bg-brand-light px-2.5 py-1 text-[10px] font-semibold text-brand">{status}</span></td></tr>)}</tbody></table></div>
    </section>
  );
}
