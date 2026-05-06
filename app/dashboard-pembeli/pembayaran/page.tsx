"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const ORDER = {
  project: {
    name: "Restorasi Mangrove Teluk Kelabat",
    location: "Bangka Belitung, Indonesia",
    img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=80&q=80",
  },
  volumeTons: 10,
  pricePerTon: 15,
  platformFeePct: 0.05,
};

type PaymentMethod = "card" | "transfer";

export default function PembayaranPage() {
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [cardNum, setCardNum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const subtotal = ORDER.volumeTons * ORDER.pricePerTon;
  const fee = subtotal * ORDER.platformFeePct;
  const total = subtotal + fee;

  const formatCardNum = (v: string) =>
    v
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();

  const formatExpiry = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  };

  if (confirmed) {
    return (
      <main className="pt-[130px] pb-24 max-w-7xl mx-auto px-4 flex flex-col items-center gap-6 text-center">
        <CheckCircle className="size-16 text-secondary mt-10" />
        <h1 className="text-h2 font-bold text-text-primary">
          Pembayaran Berhasil!
        </h1>
        <p className="text-c-l text-text-secondary max-w-sm">
          Sertifikat pensiun kredit karbon Anda akan segera diterbitkan dan
          dikirim ke email terdaftar.
        </p>
        <Link
          href="/dashboard-pembeli"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-c-l font-semibold text-white shadow-sm hover:opacity-90 transition"
        >
          Kembali ke Marketplace
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-[130px] pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back */}
      <Link
        href="/dashboard-pembeli/1"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-c-l font-semibold text-text-secondary shadow-sm hover:bg-surface transition mb-8"
      >
        ← Kembali Ke Dashboard
      </Link>

      <h1 className="text-h2 font-bold text-text-primary text-center mb-10">
        Selesaikan Pembayaran
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
        {/* ── Payment Form ── */}
        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-sh-m font-bold text-text-primary mb-5 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="1" y="4" width="18" height="13" rx="2.5" stroke="#2563EB" strokeWidth="1.5" />
              <path d="M1 8h18" stroke="#2563EB" strokeWidth="1.5" />
              <rect x="4" y="12" width="4" height="2" rx="1" fill="#2563EB" />
            </svg>
            Metode Pembayaran
          </h2>

          {/* Method options */}
          <div className="flex flex-col gap-3 mb-6">
            {(
              [
                { val: "card",     label: "Kartu Kredit / Debit" },
                { val: "transfer", label: "Bank Transfer / Invoice ESG" },
              ] as { val: PaymentMethod; label: string }[]
            ).map(({ val, label }) => (
              <label
                key={val}
                onClick={() => setMethod(val)}
                className={`flex items-center gap-3 rounded-2xl border-2 px-5 py-4 cursor-pointer transition ${
                  method === val
                    ? "border-primary bg-blue-50"
                    : "border-border bg-white"
                }`}
              >
                {/* Radio dot */}
                <span
                  className={`flex size-4 shrink-0 items-center justify-center rounded-full border-2 ${
                    method === val ? "border-primary" : "border-border"
                  }`}
                >
                  {method === val && (
                    <span className="block size-2 rounded-full bg-primary" />
                  )}
                </span>
                <span
                  className={`text-c-l font-semibold ${
                    method === val ? "text-primary" : "text-text-primary"
                  }`}
                >
                  {label}
                </span>
              </label>
            ))}
          </div>

          {/* Card fields */}
          {method === "card" && (
            <div className="flex flex-col gap-4">
              <FormField label="Nomor Kartu">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="0000 0000 0000 0000"
                  value={cardNum}
                  onChange={(e) => setCardNum(formatCardNum(e.target.value))}
                  className={inputCls}
                />
              </FormField>
              <div className="grid grid-cols-2 gap-4">
                <FormField label="MM/YY">
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="12/26"
                    value={expiry}
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    className={inputCls}
                  />
                </FormField>
                <FormField label="CVC">
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="123"
                    maxLength={3}
                    value={cvc}
                    onChange={(e) =>
                      setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))
                    }
                    className={inputCls}
                  />
                </FormField>
              </div>
            </div>
          )}

          {method === "transfer" && (
            <div className="rounded-2xl bg-surface border border-border p-5">
              <p className="text-c-l text-text-secondary leading-relaxed">
                Invoice ESG akan dikirimkan ke email terdaftar dalam 1x24 jam
                setelah konfirmasi. Pembayaran dapat dilakukan melalui transfer
                bank ke rekening yang tertera pada invoice.
              </p>
            </div>
          )}
        </div>

        {/* ── Order Summary ── */}
        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-sh-m font-bold text-text-primary mb-5">
            Ringkasan Pesanan
          </h2>

          {/* Project row */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src={ORDER.project.img}
              alt={ORDER.project.name}
              className="size-14 rounded-2xl object-cover shrink-0"
            />
            <div>
              <p className="text-c-l font-bold text-text-primary leading-snug">
                {ORDER.project.name}
              </p>
              <p className="text-c-r text-text-secondary">
                {ORDER.project.location}
              </p>
            </div>
          </div>

          {/* Price breakdown */}
          <div className="flex flex-col gap-3 mb-5">
            <SummaryRow
              label="Volume Kredit"
              value={`${ORDER.volumeTons} tCO₂e`}
            />
            <SummaryRow
              label="Harga per ton"
              value={`$${ORDER.pricePerTon.toFixed(2)}`}
            />
            <SummaryRow
              label="Subtotal"
              value={`$${subtotal.toFixed(2)}`}
            />
            <SummaryRow
              label="Biaya platform (5%)"
              value={`$${fee.toFixed(2)}`}
            />
          </div>

          {/* Gradient divider */}
          <div
            className="h-1 rounded-full mb-5"
            style={{
              background: "linear-gradient(to right, #2563EB, #00A083)",
            }}
          />

          {/* Total */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-sh-m font-bold text-text-primary">
              Total Bayar
            </span>
            <span className="text-h2 font-bold text-primary">
              ${total.toFixed(2)}
            </span>
          </div>

          {/* Confirm button */}
          <button
            onClick={() => setConfirmed(true)}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-c-l font-bold text-white shadow-md hover:opacity-90 transition active:scale-95"
          >
            Konfirmasi &amp; Pensiunkan Kredit{" "}
            <CheckCircle className="size-4" />
          </button>

          <p className="mt-3 text-center text-c-r text-text-secondary">
            Transaksi aman. Sertifikat pensiun akan diterbitkan langsung.
          </p>
        </div>
      </div>
    </main>
  );
}

const inputCls =
  "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-c-l text-text-primary outline-none focus:border-primary transition placeholder:text-text-secondary";

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-c-r font-semibold text-text-secondary mb-2">{label}</p>
      {children}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-c-l">
      <span className="text-text-secondary">{label}</span>
      <span className="font-semibold text-text-primary">{value}</span>
    </div>
  );
}