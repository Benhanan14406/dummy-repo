import Link from "next/link";
import { ChevronLeft, MapPin, ShieldCheck, CircleCheck, Database, FileText } from "lucide-react";

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
    : "Restorasi Mangrove Teluk Kelabat";

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="pt-[110px] pb-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <Link
              href="/dashboard-penjual"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              <ChevronLeft size={16} /> Kembali Ke Dashboard
            </Link>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-950">{projectName}</h1>
                <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Published
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <MapPin className="h-4 w-4 text-slate-400" />
                <p>Bangka Belitung, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-10">
            <button className="rounded-[8px] border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100">
              Unpublish Listing
            </button>
          </div>
        </div>

        {/* grid gap-6 lg:grid-cols-[1.9fr_1fr] */}
        <div className=" flex flex-col gap-10">
          <div className=" SECTION 1 space-y-6">

            <div className="w-[1215px] h-[222px] rounded-[8px] border-[1.5px] border-[#D9D9D9] flex flex-col px-10 py-2">

              {/* Header */}
              <div className="w-full h-10 flex items-center">
                <ShieldCheck size={28} className="ml-5" color="#2563EB"/>
                
                <p className="font-bold text-[14px] ml-4 flex-1">
                  Carbon Credit Identity & Traceability
                </p>

                <div className="bg-[#DBEAFE] w-[138px] h-[31px] rounded-[8px] flex items-center justify-center gap-2">
                  <CircleCheck size={16} color="#1D69E3" strokeWidth={3}/>
                  <p className="text-[#1D69E3]">Verified</p>
                </div>
              </div>

              {/* Divider */}
              <hr className="w-full border-t border-gray-300 my-3" />

              {/* Table */}
              <div className="w-full flex items-center">
                <div className="grid grid-cols-4 w-full text-center">
                  <p className="text-slate-500">Registry</p>
                  <p className="text-slate-500">Vintage</p>
                  <p className="text-slate-500">Methodology</p>
                  <p className="text-slate-500">Verified by</p>

                  <p>Verra (VCS)</p>
                  <p>2023</p>
                  <p>VM0033 (Blue Carbon)</p>
                  <p>DNV (Mar 2024)</p>
                </div>
              </div>

              {/* Divider */}
              <hr className="w-full border-t border-gray-300 my-3" />

              {/* Serial */}
              <div className="w-full flex items-center">
                <p className="flex-1 ml-10">Serial Range:</p>

                <div className="w-[317px] h-[38px] flex items-center justify-center rounded-[8px] border-[1.5px] border-[#D9D9D9] bg-white">
                  <p className="text-c-r font-bold">
                    VCS-9921-2023-0001-20000
                  </p>
                </div>
              </div>

            </div>
            

          </div>

          <div className="SECTION 2 flex flex-row gap-[20px]">
            <div className="flex gap-[20px] flex-col">
              <section className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm w-[820px]">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="flex flex-row items-center gap-2">
                      <Database color="#2563EB" strokeWidth={2}/>
                      <h3 className="text-2xl font-semibold text-slate-950">Manajemen Inventaris (Audit-Grade)</h3>
                    </div>
                  </div>
                  <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                    Total Supply 20,000 tCO₂e
                  </div>
                </div>


                <div className="mt-6 rounded-[8px] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
                    <span>Inventory distribution</span>
                    <span className="font-semibold text-slate-950">20,000 tCO₂e</span>
                  </div>
                  <div className="flex h-2 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-[25%] bg-[#00A083]" />
                    <div className="h-full w-[12.5%] bg-[#00A083]" />
                    <div className="h-full w-[5%] bg-[#FBBF24]" />
                    <div className="h-full w-[5%] bg-rose-400" />
                    <div className="h-full w-[52.5%] bg-[#2563EB]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                  {[
                    { label: "Retired", value: "5,000", tone: "bg-[#1F2933]" },
                    { label: "Sold (Active)", value: "2,500", tone: "bg-[#00A083] text-white" },
                    { label: "Reserved", value: "1,000", tone: "bg-[#FBBF24] text-slate-950" },
                    { label: "Buffer (Risk)", value: "1,000", tone: "bg-[#FB7185] text-slate-950" },
                    { label: "Available", value: "10,500", tone: "bg-[#2563EB] text-white" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[8px] border border-slate-200 bg-slate-50 p-4">
                      <div className="flex flex-row items-center gap-2">

                        <div className= {`rounded-full w-[10px] h-[10px] ${item.tone}`}>
                        </div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                      </div>

                      <p className={`mt-1 inline-flex rounded-full px-3 py-2 text-sh-l font-bold `}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm w-[820px]">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-row items-center gap-2">
                      <FileText />
                      <h3 className="text-2xl font-semibold text-slate-950">Audit Trail (Sales Log)</h3>
                    </div>
                    
                  </div>
                </div>

                <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-slate-50">
                  <div className="grid grid-cols-[140px_110px_120px_100px_150px] gap-4 border-b border-slate-200 px-5 py-4 text-xs uppercase tracking-[0.22em] text-slate-500 text-center items-center whitespace-nowrap">
                    <span>Buyer</span>
                    <span>Date</span>
                    <span>Volume</span>
                    <span>Total</span>
                    <span>Status / Delivery</span>
                  </div>
                  <div className="grid grid-cols-[140px_110px_120px_100px_150px] gap-4 px-5 py-4 text-sm text-slate-700 text-center items-center whitespace-nowrap">
                    <span className="font-semibold text-slate-950">Perusahaan ESG #1</span>
                    <span>12 Mar 2026</span>
                    <span className="text-emerald-600">+1,500 tCO₂e</span>
                    <span>$22,500</span>
                    <span className="rounded-[8px] bg-emerald-100 px-3 py-1 text-xs font-regular uppercase  text-emerald-700 flex items-center  justify-center ">
                      Completed / Delivered
                    </span>
                  </div>
                </div>
              </section>

            </div>
            <div>
              <aside className="space-y-6 ">
                <section className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-950">Pengaturan Listing</h2>
                    <p className="mt-2 text-sm text-slate-500">Harga per ton, visibilitas marketplace, dan status listing.</p>
                  </div>

                  <div className="mt-8 space-y-6">
                    <div>
                      <label className="text-sm font-semibold text-slate-700">Harga per Ton CO₂e ($)</label>
                      <div className="mt-3 flex items-center rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <span className="text-base font-semibold text-slate-500">$</span>
                        <input
                          type="text"
                          defaultValue="15"
                          className="ml-3 w-full border-none bg-transparent text-2xl font-semibold text-slate-950 outline-none"
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        Harga rata-rata pasar untuk Blue Carbon / ARR adalah $14 - $20.
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-950">Visibilitas Marketplace</p>
                          <p className="mt-1 text-sm text-slate-500">Jika status Published, proyek ini dapat dilihat dan dibeli investor.</p>
                        </div>
                        <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                          Publik
                        </span>
                      </div>
                    </div>

                    <button className="inline-flex w-full items-center justify-center rounded-3xl bg-slate-950 px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800">
                      Simpan Perubahan
                    </button>
                  </div>
                </section>
              </aside>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
