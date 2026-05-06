"use client";

import Link from "next/link";
import { useState } from "react";
import { MapPin, Download, ChevronDown } from "lucide-react";

const PROJECT = {
  id: 1,
  type: "BLUE CARBON / ARR",
  name: "Restorasi Mangrove Teluk Kelabat",
  location: "Bangka Belitung, Indonesia",
  developer: "Komunitas Pesisir Lestari",
  availableTons: 12500,
  pricePerTon: 15,
  platformFeePct: 0.05,
  registry: "Verra (VCS)",
  vintage: "2023",
  methodology: "VM0033 (Blue Carbon)",
  verifiedBy: "DNV (Mar 2024)",
  serialRange: "VCS-9921-2023-0001-20000",
  img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80",
  about: `Proyek ini bertujuan untuk memulihkan ekosistem mangrove yang terdegradasi, memberikan perlindungan garis pantai, dan menciptakan lapangan kerja bagi komunitas lokal melalui solusi MRV berbasis data lapangan. Dengan mendukung proyek ini, Anda berkontribusi langsung pada target iklim global sekaligus melestarikan keanekaragaman hayati pesisir.`,
  impacts: [
    { icon: "🌲", value: "250.000+ Ditanam",        bg: "bg-emerald-50",  text: "text-secondary" },
    { icon: "🦋", value: "12 Spesies Rentan\nDilindungi", bg: "bg-amber-50",   text: "text-amber-600" },
    { icon: "👥", value: "150 Nelayan Terbantu",    bg: "bg-blue-50",    text: "text-primary" },
  ],
  mrv: {
    area: "500 Ha",
    methodology: "VM0033 (Blue Carbon)",
    baseline: "Hist. Deforestasi",
    confidence: "Tinggi",
  },
  faqs: [
    {
      q: "Apa Risiko Permanence proyek ini?",
      a: "Risiko utama adalah intrusi air laut dan cuaca ekstrem. Proyek ini telah mengalokasikan 15% dari total kreditnya ke dalam Buffer Pool sebagai mitigasi risiko permanen sesuai standar Verra.",
    },
    {
      q: "Bagaimana penanganan Leakage Risk?",
      a: "Risiko kebocoran (perambahan liar yang berpindah) diminimalkan dengan memberikan kompensasi langsung dan alternatif mata pencaharian berkelanjutan (silvofishery) kepada komunitas nelayan.",
    },
  ],
  documents: [
    "PDD_Teluk_Kelabat_v1.pdf",
    "Verification_Report_2024.pdf",
  ],
};

export default function ProjectDetailPage() {
  const [tons, setTons] = useState(10);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const platformFee = tons * PROJECT.pricePerTon * PROJECT.platformFeePct;
  const total = tons * PROJECT.pricePerTon + platformFee;

  return (
    <main className="pt-[130px] pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back */}
      <Link
        href="/dashboard-pembeli"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-c-l font-semibold text-text-secondary shadow-sm hover:bg-surface transition mb-8"
      >
        ← Kembali Ke Marketplace
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
        {/* ── Left Column ── */}
        <div className="flex flex-col gap-8">
          {/* Hero image */}
          <div className="relative h-72 rounded-3xl overflow-hidden">
            <img
              src={PROJECT.img}
              alt={PROJECT.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="inline-block bg-primary text-white text-c-r font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                {PROJECT.type}
              </span>
              <h1 className="text-h2 font-bold text-white leading-tight">
                {PROJECT.name}
              </h1>
              <p className="flex items-center gap-1.5 text-white/80 text-c-l mt-1">
                <MapPin className="size-3.5" />
                {PROJECT.location}
              </p>
            </div>
          </div>

          {/* Developer */}
          <div className="flex items-center gap-3 text-c-l text-text-secondary">
            <div className="flex size-8 items-center justify-center rounded-full bg-blue-50">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="5" r="2.5" stroke="#2563EB" strokeWidth="1.3" />
                <path d="M3 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
            Dikembangkan oleh:{" "}
            <span className="font-semibold text-text-primary">
              {PROJECT.developer}
            </span>
          </div>

          {/* Identity card */}
          <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <p className="text-c-r font-bold uppercase tracking-widest text-text-secondary flex items-center gap-2">
                🛡️ Carbon Credit Identity &amp; Traceability
              </p>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-c-r font-bold text-emerald-600">
                ✓ Verified
              </span>
            </div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 sm:grid-cols-4 mb-4">
              {[
                { label: "Registry",    value: PROJECT.registry },
                { label: "Vintage",     value: PROJECT.vintage },
                { label: "Methodology", value: PROJECT.methodology },
                { label: "Verified by", value: PROJECT.verifiedBy },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-c-r text-text-secondary mb-1">{label}</p>
                  <p className="text-c-l font-bold text-text-primary">{value}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <p className="text-c-r text-text-secondary">Serial Range</p>
              <p className="font-mono text-c-r bg-surface rounded-lg px-3 py-1.5 text-text-primary">
                {PROJECT.serialRange}
              </p>
            </div>
          </div>

          {/* About */}
          <Section title="Tentang Proyek">
            <p className="text-c-l text-text-secondary leading-relaxed">
              {PROJECT.about}
            </p>
          </Section>

          {/* Co-Benefits */}
          <Section title="Dampak Nyata (Co-Benefits)">
            <div className="grid grid-cols-3 gap-4">
              {PROJECT.impacts.map((impact) => (
                <div
                  key={impact.value}
                  className={`${impact.bg} rounded-2xl p-5 flex flex-col items-center text-center gap-2`}
                >
                  <span className="text-3xl">{impact.icon}</span>
                  <p className={`text-c-l font-bold ${impact.text} whitespace-pre-line leading-snug`}>
                    {impact.value}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* MRV Transparency */}
          <div className="rounded-3xl bg-tertiary p-6 text-white">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="10" width="3" height="6" rx="1" fill="#3B8FEF" />
                  <rect x="7" y="6" width="3" height="10" rx="1" fill="#3B8FEF" />
                  <rect x="12" y="2" width="3" height="14" rx="1" fill="#3B8FEF" />
                </svg>
                <span className="text-sh-m font-bold">Transparansi Kalkulasi Karbon</span>
              </div>
              <span className="bg-primary text-white text-c-r font-bold px-3 py-1 rounded-full">
                CarbonTide MRV
              </span>
            </div>
            <p className="text-c-r text-white/60 leading-relaxed mb-6">
              Akurasi proyek ini dihitung menggunakan pendekatan hibrida: pengukuran
              manual lapangan (DBH, Tinggi) dikombinasikan dengan persamaan alometrik
              standar untuk stok karbon mangrove.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-5">
              {[
                { label: "Luas Area",    value: PROJECT.mrv.area },
                { label: "Metodologi",   value: PROJECT.mrv.methodology },
                { label: "Baseline",     value: PROJECT.mrv.baseline },
                { label: "Confidence",   value: `✓ ${PROJECT.mrv.confidence}`, green: true },
              ].map(({ label, value, green }) => (
                <div key={label}>
                  <p className="text-c-r text-white/40 mb-1">{label}</p>
                  <p className={`text-c-l font-bold ${green ? "text-secondary" : "text-white"}`}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
              <span className="text-c-r text-white/40">ℹ️ Lihat Rumus Estimasi Biomassa</span>
              <span className="font-mono text-c-r text-white/40">
                AGB = 0.0673 × (ρD²H)⁰·⁹⁷⁶
              </span>
            </div>
          </div>

          {/* FAQ */}
          <Section title="⚠️ FAQ & Risk Disclosure">
            <div className="flex flex-col gap-3">
              {PROJECT.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-c-l font-bold text-text-primary">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`size-4 text-text-secondary shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="px-5 pb-5 text-c-l text-text-secondary leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* Documents */}
          <Section title="📄 Dokumen & Sertifikasi">
            <div className="flex flex-col gap-3">
              {PROJECT.documents.map((doc) => (
                <div
                  key={doc}
                  className="flex items-center justify-between rounded-2xl border border-border px-5 py-4"
                >
                  <div className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="1" width="10" height="13" rx="1.5" stroke="#2563EB" strokeWidth="1.3" />
                      <path d="M5 5h6M5 8h4" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <span className="text-c-l font-semibold text-text-primary">
                      {doc}
                    </span>
                  </div>
                  <button className="text-text-secondary hover:text-primary transition">
                    <Download className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ── Right Column: Purchase Panel ── */}
        <div className="lg:sticky lg:top-[120px]">
          <div className="rounded-3xl border border-border bg-white p-6 shadow-lg">
            <h2 className="text-sh-m font-bold text-text-primary mb-1">
              Kompensasi Emisi Anda
            </h2>
            <p className="text-c-l font-semibold text-secondary mb-6">
              {PROJECT.availableTons.toLocaleString()} ton CO2e tersedia
            </p>

            <label className="block text-c-l font-semibold text-text-primary mb-2">
              Jumlah yang ingin dibeli (1 Ton CO2e)
            </label>
            <input
              type="number"
              min={1}
              max={PROJECT.availableTons}
              value={tons}
              onChange={(e) =>
                setTons(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-h3 font-bold text-text-primary outline-none focus:border-primary transition mb-6"
            />

            <div className="flex flex-col gap-3 mb-5">
              <PriceRow
                label="Harga per ton"
                value={`$${PROJECT.pricePerTon.toFixed(2)}`}
              />
              <PriceRow
                label="Biaya platform (5%)"
                value={`$${platformFee.toFixed(2)}`}
              />
            </div>

            <div className="border-t border-border pt-4 flex items-center justify-between mb-5">
              <span className="text-sh-m font-bold text-text-primary">
                Total Estimasi
              </span>
              <span className="text-h3 font-bold text-primary">
                ${total.toFixed(2)}
              </span>
            </div>

            <Link
              href="/dashboard-pembeli/pembayaran"
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-c-l font-bold text-white shadow-md hover:opacity-90 transition active:scale-95"
            >
              Lanjut ke Pembayaran →
            </Link>

            <p className="mt-3 text-center text-c-r text-text-secondary">
              ✅ Sertifikat pensiun akan diterbitkan otomatis
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-sh-m font-bold text-text-primary mb-4">{title}</h2>
      {children}
    </div>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-c-l">
      <span className="text-text-secondary">{label}</span>
      <span className="font-semibold text-text-primary">{value}</span>
    </div>
  );
}