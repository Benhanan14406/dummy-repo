import Link from "next/link";
import { MapPin, TreePine, Users } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    type: "BLUE CARBON / ARR",
    name: "Restorasi Mangrove Teluk Kelabat",
    location: "Bangka Belitung, Indonesia",
    trees: "250.000+",
    fishers: "150 Nelayan",
    pricePerTon: 15,
    img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
  },
  {
    id: 2,
    type: "BLUE CARBON / ARR",
    name: "Restorasi Mangrove Teluk Kelabat",
    location: "Bangka Belitung, Indonesia",
    trees: "250.000+",
    fishers: "150 Nelayan",
    pricePerTon: 15,
    img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
  },
  {
    id: 3,
    type: "BLUE CARBON / ARR",
    name: "Restorasi Mangrove Teluk Kelabat",
    location: "Bangka Belitung, Indonesia",
    trees: "250.000+",
    fishers: "150 Nelayan",
    pricePerTon: 15,
    img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
  },
];

export default function BeliKredit() {
  return (
    <main className="pt-[130px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-h1 font-bold text-text-primary mb-3">
          Jelajahi Proyek Blue Carbon
        </h1>
        <p className="text-sh-m text-text-secondary max-w-2xl">
          Dukung komunitas lokal dan pulihkan ekosistem dengan kredit karbon
          berkualitas tinggi dan terverifikasi.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-3xl border border-border shadow-sm p-4 mb-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Search */}
        <div className="flex items-center gap-3 flex-1 border border-border rounded-2xl px-4 py-3 bg-surface">
          <svg
            className="shrink-0 text-text-secondary"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Cari lokasi atau tempat proyek..."
            className="w-full bg-transparent text-c-l text-text-primary placeholder:text-text-secondary outline-none"
          />
        </div>

        {/* Filter 1 */}
        <div className="relative">
          <select className="appearance-none border border-border rounded-2xl px-4 py-3 pr-10 text-c-l text-text-primary bg-white outline-none cursor-pointer min-w-[180px]">
            <option>Semua Tipe Proyek</option>
            <option>Blue Carbon</option>
            <option>ARR</option>
            <option>REDD+</option>
          </select>
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Filter 2 */}
        <div className="relative">
          <select className="appearance-none border border-border rounded-2xl px-4 py-3 pr-10 text-c-l text-text-primary bg-white outline-none cursor-pointer min-w-[180px]">
            <option>Standar Verifikasi</option>
            <option>Verra (VCS)</option>
            <option>Gold Standard</option>
            <option>Plan Vivo</option>
          </select>
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <Link
            key={project.id}
            href={`/dashboard-pembeli/${project.id}`}
            className="group bg-white rounded-3xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="h-52 overflow-hidden">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Body */}
            <div className="p-5">
              <p className="text-c-r font-bold uppercase tracking-widest text-primary mb-2">
                {project.type}
              </p>
              <h2 className="text-sh-m font-bold text-text-primary mb-2 leading-snug">
                {project.name}
              </h2>
              <div className="flex items-center gap-1.5 text-c-l text-text-secondary mb-4">
                <MapPin className="size-3.5 shrink-0" />
                {project.location}
              </div>

              {/* Stats pills */}
              <div className="flex gap-3 mb-5">
                <div className="flex items-center gap-2 bg-surface rounded-xl px-3 py-2 text-c-l text-text-secondary font-medium">
                  <TreePine className="size-3.5 text-secondary" />
                  {project.trees}
                </div>
                <div className="flex items-center gap-2 bg-surface rounded-xl px-3 py-2 text-c-l text-text-secondary font-medium">
                  <Users className="size-3.5 text-primary" />
                  {project.fishers}
                </div>
              </div>

              {/* Price row */}
              <div className="border-t border-border pt-4 flex items-end justify-between">
                <div>
                  <p className="text-c-r text-text-secondary mb-1">Harga per ton</p>
                  <p className="text-h3 font-bold text-text-primary">
                    ${project.pricePerTon}
                  </p>
                </div>
                <div className="flex size-10 items-center justify-center rounded-full bg-primary text-white shadow-md group-hover:bg-primary/90 transition">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9h12M10 4l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}