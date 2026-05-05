"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar(){

    const pathname = usePathname();

    return (
        <div className="absolute z-1 flex w-full">
            <nav className="bg-white grid grid-cols-[20%_80%] items-center w-full shadow-lg h-25">
                <Link href="/" className="ml-10">
                    <Image
                    src="/images/logo.png"
                    width={250}
                    height={225}
                    alt="Logo CarbonTide"
                    className="h-auto transition-all"
                    />
                </Link>
                <div className="flex flex-row justify-end items-center gap-20 mr-10">

                    <Link href='/beli-kredit' className="hover: hover:underline transition-colors">
                        Beli Kredit
                    </Link>

                    <Link href='/portofolio' className="hover: hover:underline transition-colors">
                        Portofolio
                    </Link>

                    <Link href='/dashboard-penjual' className="hover: hover:underline transition-colors">
                        Dashboard Penjual
                    </Link>

                    <Link href='/mrv' className="hover: hover:underline transition-colors">
                        Buat Proyek (MRV)
                    </Link>
                </div>
            </nav>
        </div>
    )
}