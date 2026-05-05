import Link from "next/link";
import { ChevronLeft, CalendarDays, ShieldCheck, Wallet } from "lucide-react";

interface ProjectPageProps {
  params: {
    project: string;
  };
}

export default function DashboardProjectPage({ params }: ProjectPageProps) {
  const projectName = params?.project
  ? params.project
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
    : "Project";

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="pt-[130px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Link href="/dashboard-penjual" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <ChevronLeft size={16} /> Kembali
              </Link>
            </div>
            <h1 className="mt-3 text-3xl font-bold text-slate-900">{projectName}</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              Kelola listing proyek, inventaris kredit, dan pengaturan marketplace untuk proyek karbon Anda.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/dashboard-penjual"
              className="inline-flex items-center justify-center rounded-[8px] border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
            >
              Kembali ke dashboard
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
          <section className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Inventaris Kredit Karbon</h2>
                <p className="mt-1 text-sm text-slate-500">Semua detail inventaris dan performa penjualan.</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Published
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Total Kredit (Diterbitkan)</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">20,000</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Total Kredit (Diterbitkan)</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">12,500</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-emerald-50 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Total Kredit (Diterbitkan)</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">7,500</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-5">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Progres Penjualan</span>
                <span className="font-semibold text-slate-900">38%</span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[38%] rounded-full bg-emerald-600" />
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Riwayat Penjualan Terakhir</h3>
                  <p className="mt-1 text-sm text-slate-500">Transaksi terbaru investor pada proyek ini.</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { name: "Perusahaan ESG #1", time: "Hari ini, 10:40 AM", value: "+2500 tCO₂e", amount: "$37,500" },
                  { name: "Perusahaan ESG #2", time: "Hari ini, 10:41 AM", value: "+2000 tCO₂e", amount: "$30,000" },
                  { name: "Perusahaan ESG #3", time: "Hari ini, 10:42 AM", value: "+1500 tCO₂e", amount: "$22,500" },
                ].map((item) => (
                  <div key={item.name} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-900">{item.name}</p>
                        <p className="text-sm text-slate-500">{item.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-emerald-600">{item.value}</p>
                        <p className="text-sm text-slate-400">{item.amount}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Pengaturan Listing</h2>
                <p className="mt-1 text-sm text-slate-500">Perbarui harga, visibilitas, dan detail listing proyek.</p>
              </div>
              <Wallet className="h-6 w-6 text-slate-400" />
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700">Harga per Ton CO₂e ($)</label>
                <div className="mt-3 flex rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-slate-500">$</span>
                  <input
                    type="text"
                    defaultValue="15"
                    className="ml-2 w-full bg-transparent text-lg font-semibold text-slate-900 outline-none"
                  />
                </div>
                <p className="mt-2 text-sm text-slate-400">Harga rata-rata pasar untuk Blue Carbon / ARR adalah $14 - $20.</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Visibilitas Marketplace</p>
                    <p className="text-sm text-slate-500">Jika status "Published", proyek ini dapat dilihat dan dibeli investor.</p>
                  </div>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Publik
                  </span>
                </div>
              </div>

              <button className="w-full rounded-2xl bg-slate-950 px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800">
                Simpan Perubahan
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
