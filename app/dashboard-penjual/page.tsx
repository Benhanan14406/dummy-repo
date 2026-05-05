import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Dashboard_penjual() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="pt-[130px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Dashboard Penjual</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              Kelola portofolio proyek karbon, inventaris kredit, dan performa penjualan Anda.
            </p>
          </div>
          <Link
            href="/buat-proyek"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
          >
            + Buat Proyek Baru
          </Link>
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">💰</div>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Total Pendapatan</span>
            </div>
            <p className="mt-8 text-3xl font-semibold text-slate-900">$112,500</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">📈</div>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Kredit Terjual</span>
            </div>
            <p className="mt-8 text-3xl font-semibold text-slate-900">7,500 <span className="text-base font-medium text-slate-500">tCO₂e</span></p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">🗂️</div>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Total Proyek</span>
            </div>
            <p className="mt-8 text-3xl font-semibold text-slate-900">2 <span className="text-base font-medium text-slate-500">Proyek</span></p>
          </div>
        </section>

        <section className="mt-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Daftar Proyek & Inventaris</h2>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <div className="bg-slate-50 px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              <div className="grid grid-cols-[minmax(220px,_1fr)_120px_120px_220px_96px] items-center gap-4">
                <span>Nama Proyek</span>
                <span>Status</span>
                <span>Harga/Ton</span>
                <span>Inventaris (Tersedia)</span>
                <span>Aksi</span>
              </div>
            </div>

            <div className="px-5 py-4">
              <div className="grid grid-cols-[minmax(220px,_1fr)_120px_120px_220px_96px] items-center gap-4 border-t border-slate-200 py-4">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-3xl bg-slate-100" />
                  <div>
                    <p className="font-semibold text-slate-900">Restorasi Mangrove Teluk Kelabat</p>
                    <p className="text-sm text-slate-500">Blue Carbon / ARR</p>
                  </div>
                </div>
                <div>
                  <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Published
                  </span>
                </div>
                <div className="font-semibold text-slate-900">$15</div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                    <span>12,500</span>
                    <span>20,000</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[62.5%] rounded-full bg-blue-600"></div>
                  </div>
                </div>
                <div>
                  <Link href="/dashboard-penjual" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-800">
                    Kelola <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
