



export default function Catalogue() {



  return (
    <div className="min-h-screen bg-slate-50">
      <main className="pt-[130px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Jelajahi Proyek Blue Carbon</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              Dukung komunitas lokal dan pulihkan ekosistem dengan kredit karbon berkualitas tinggi dan terverifikasi. 
            </p>
          </div>
        </div>

        <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm flex items-center gap-4 mt-10">
              {/* Search Bar */}
            <div className="flex-1">
                <input
                type="text"
                placeholder="Cari lokasi atau tempat proyek..."
                className="w-full rounded-[8px] border border-[#94A3B8] px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
            </div>

            {/* Dropdown 1 */}
            <div className="w-[220px]">
                <select className="w-full rounded-[8px] border border-slate-200 px-4 py-3 text-sm text-slate-500 outline-none focus:border-blue-500">
                <option>Semua Tipe Proyek</option>
                <option>Blue Carbon</option>
                <option>ARR</option>
                <option>Renewable Energy</option>
                </select>
            </div>

            {/* Dropdown 2 */}
            <div className="w-[220px]">
                <select className="w-full rounded-[8px] border border-slate-200 px-4 py-3 text-sm text-slate-500 outline-none focus:border-blue-500">
                <option>Standar Verifikasi</option>
                <option>Verra (VCS)</option>
                <option>Gold Standard</option>
                <option>Plan Vivo</option>
                </select>
            </div>
        </div>

      
        

    
      </main>
    </div>
  );
}
