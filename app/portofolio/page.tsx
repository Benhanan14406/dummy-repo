import { TreePine , Car , Wallet , Download} from 'lucide-react';
import Link from "next/link";


export default function Portofolio() {
    return(
        <div className="min-h-screen bg-slate-50">
            <main className="pt-[130px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Portofolio Dampak Iklim</h1>
                        <p className="mt-3 max-w-2xl text-sm text-slate-600">
                        Lacak total emisi yang telah Anda kompensasi dan dampaknya bagi lingkungan.
                        </p>
                    </div>
                    <Link href="/beli-kredit">
                    
                        <div
                            className="inline-flex items-center justify-center rounded-[8px] border border-blue-600 px-5 py-3 text-sm font-medium text-blue-600 shadow-sm transition hover:bg-blue-100"
                        >
                            + Beli Kredit Lainnya
                        </div>
                    </Link>

                </div>
                <div className="flex flex-row gap-4 mt-15 mb-15">
                    <div className="w-[327px] h-[227px] bg-[#162033] rounded-[16px] flex flex-col justify-center p-5">
                        <p className="text-[#94A3B8] text-sh-m">
                            Total Offset Karbon
                        </p>
                        <div className="flex flex-row">
                            <p className="text-white text-h1 font-bold">
                                150
                            </p>
                            <p className="text-[#94A3B8] text-sh-m ml-1 mt-4"> 
                                tCO₂e
                            </p>
                        </div>
                        <p className="text-[#00A083] text-sh-m">
                            Sepenuhnya dipensiunkan
                        </p>
                    </div>
                    <div className="w-[327px] h-[227px] bg-white border border-slate-200 shadow-sm rounded-[16px] flex flex-col justify-center p-5">
                        <div className="w-[80px] h-[80px] bg-[#ECFDF5] rounded-[16px] flex justify-center items-center">
                            <TreePine color='#7EC8B4' size={30}/>
                        </div>
                        <p className="text-[#94A3B8] text-sh-m mt-4"> 
                        Setara dengan Penanaman
                        </p>
                        <p className="text-black text-h2 font-bold">
                            750 Pohon
                        </p>
                    </div>
                    <div className="w-[327px] h-[227px] bg-white border border-slate-200 shadow-sm rounded-[16px] flex flex-col justify-center p-5">
                        <div className="w-[80px] h-[80px] bg-[#EFF6FF] rounded-[16px] flex justify-center items-center">
                            <Car size={30} color='#2563EB'/>
                        </div>
                        <p className="text-[#94A3B8] text-sh-m mt-4"> 
                        Setara dengan Menghapus
                        </p>
                        <p className="text-black text-h2 font-bold">
                            33 Mobil
                        </p>
                    </div>
                    <div className="w-[327px] h-[227px] bg-white border border-slate-200 shadow-sm rounded-[16px] flex flex-col justify-center p-5">
                        <div className="w-[80px] h-[80px] bg-[#F7F9FC] rounded-[16px] flex justify-center items-center">
                            <Wallet size={30} />
                        </div>
                        <p className="text-[#94A3B8] text-sh-m mt-4"> 
                            Total Kontribusi (ESG)
                        </p>
                        <p className="text-black text-h2 font-bold">
                            $2,362.5
                        </p>
                    </div>
                </div>

                <section className="mt-8 rounded-[16px] border border-slate-200 bg-white shadow-sm">

                    {/* Header */}
                    <div className="px-6 py-4 border-b border-slate-200">
                        <h2 className="text-lg font-semibold text-slate-900">
                        Daftar Sertifikat & Kredit Anda
                        </h2>
                    </div>

                    {/* Table */}
                    <div className="overflow-hidden">

                        {/* Table Head */}
                        <div className="bg-slate-50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 m-2">
                        <div className="grid grid-cols-[120px_1fr_140px_140px_160px_120px] items-center">
                            <span>No. Invoice</span>
                            <span>Proyek</span>
                            <span>Tanggal</span>
                            <span>Volume</span>
                            <span>Status</span>
                            <span>Sertifikat</span>
                        </div>
                        </div>

                        {/* Table Row */}
                        <div className="px-6 py-4 border-t border-slate-200 m-2">
                        <div className="grid grid-cols-[120px_1fr_140px_140px_160px_120px] items-center">

                            {/* Invoice */}
                            <span className="text-slate-700">INV-001</span>

                            {/* Project */}
                            <span className="font-semibold text-slate-900">
                            Restorasi Mangrove Teluk Kelabat
                            </span>

                            {/* Date */}
                            <span className="text-slate-600">12 Okt 2025</span>

                            {/* Volume */}
                            <span className="font-semibold text-slate-900">
                            150 tCO₂e
                            </span>

                            {/* Status */}
                            <span className="inline-flex justify-center w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 whitespace-nowrap">
                            Retired (Pensiun)
                            </span>

                            {/* Certificate */}
                            <div className='flex flex-row items-center gap-2'>
                                <Download size={20} color='#2563EB'/>
                                <span className="flex items-center gap-2 text-blue-600 font-semibold cursor-pointer">
                                    PDF
                                </span>
                            </div>

                        </div>
                        </div>

                    </div>
                    </section>
            </main>

        </div>
    )
}