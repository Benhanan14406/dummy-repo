"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

type Role = "buyer" | "seller";

export default function RegisterPage() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole]       = useState<Role>("buyer");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: hook up auth
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4 py-12">
      {/* Card — wider to fit extra fields */}
      <div className="w-full max-w-4xl flex rounded-3xl overflow-hidden shadow-xl">
        {/* ── Left panel ── */}
        <LeftPanel
          title="Masa Depan Karbon Biru Dimulai Dari Sini."
          body="Bergabunglah dengan ekosistem CarbonTide. Hubungkan proyek reservasi alam dengan pendanaan global."
        />

        {/* ── Right panel ── */}
        <div className="flex-1 bg-white px-10 py-12 flex flex-col justify-center">
          {/* Logo */}
          <div className="mb-8">
            <Logo />
          </div>

          <h1 className="text-h3 font-bold text-text-primary mb-1">
            Buat Akun Baru
          </h1>
          <p className="text-c-l text-text-secondary mb-8">
            Daftar sekarang untuk memulai perjalanan karbon Anda.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <FormField label="Nama / Nama Perusahaan">
              <InputIcon icon={<User className="size-4 text-text-secondary" />}>
                <input
                  type="text"
                  placeholder="Cth: PT ESG Lestari"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={inputCls}
                />
              </InputIcon>
            </FormField>

            {/* Email */}
            <FormField label="Email">
              <InputIcon icon={<Mail className="size-4 text-text-secondary" />}>
                <input
                  type="email"
                  placeholder="email@perusahaan.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={inputCls}
                />
              </InputIcon>
            </FormField>

            {/* Password */}
            <FormField label="Kata Sandi">
              <InputIcon icon={<Lock className="size-4 text-text-secondary" />}>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={inputCls}
                />
              </InputIcon>
            </FormField>

            {/* Role selector */}
            <FormField label="Tujuan Anda Mendaftar:">
              <div className="grid grid-cols-2 gap-3">
                <RoleCard
                  active={role === "buyer"}
                  onClick={() => setRole("buyer")}
                  title="Pembeli (Buyer)"
                  description="Saya ingin membeli kredit karbon untuk target ESG perusahaan."
                />
                <RoleCard
                  active={role === "seller"}
                  onClick={() => setRole("seller")}
                  title="Penjual (Seller)"
                  description="Saya memiliki proyek restorasi dan ingin menjual kredit."
                />
              </div>
            </FormField>

            {/* <button
              type="submit"
              className="mt-2 w-full rounded-2xl bg-primary py-3.5 text-c-l font-bold text-white shadow-md hover:opacity-90 transition active:scale-95 flex items-center justify-center gap-2"
            >
              Buat Akun →
            </button> */}

            <Link
              href="/login"
              className="mt-2 w-full rounded-2xl bg-primary py-3.5 text-c-l font-bold text-white shadow-md hover:opacity-90 transition active:scale-95 flex items-center justify-center gap-2"
            >
              Buat Akun →
            </Link>
          </form>

          <p className="mt-8 text-center text-c-l text-text-secondary">
            Sudah memiliki akun?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:underline"
            >
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Role card ────────────────────────────────────────────────────────────────

function RoleCard({
  active,
  onClick,
  title,
  description,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  description: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left rounded-2xl border-2 p-4 transition ${
        active
          ? "border-primary bg-blue-50"
          : "border-border bg-surface hover:border-primary/40"
      }`}
    >
      <p
        className={`text-c-l font-bold mb-1 ${
          active ? "text-primary" : "text-text-primary"
        }`}
      >
        {title}
      </p>
      <p className="text-c-r text-text-secondary leading-snug">{description}</p>
    </button>
  );
}

// ─── Shared sub-components ────────────────────────────────────────────────────

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <Image
        src="/images/logo.png"
        width={130}
        height={117}
        alt="CarbonTide logo"
        className="h-auto"
      />
    </Link>
  );
}

function LeftPanel({ title, body }: { title: string; body: string }) {
  return (
    <div className="hidden md:flex w-80 shrink-0 flex-col justify-between bg-tertiary p-10 text-white">
      {/* Top logo mark */}
      <div className="flex size-10 items-center justify-center rounded-full border-2 border-white/30">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5" />
          <path d="M6 14 C6 9, 10 6, 14 8" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 16 C9 12, 14 10, 16 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Middle text */}
      <div className="flex flex-col gap-4">
        <h2 className="text-h3 font-bold leading-snug">{title}</h2>
        <p className="text-c-l text-white/60 leading-relaxed">{body}</p>
      </div>

      {/* Bottom badge */}
      <div className="flex items-center gap-2 text-c-r text-white/50">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
          <path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        Transparan. Tervalidasi. Aman.
      </div>
    </div>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-c-r font-semibold text-text-secondary uppercase tracking-widest">
        {label}
      </label>
      {children}
    </div>
  );
}

function InputIcon({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 focus-within:border-primary transition">
      {icon}
      {children}
    </div>
  );
}

const inputCls =
  "flex-1 bg-transparent text-c-l text-text-primary outline-none placeholder:text-text-secondary";