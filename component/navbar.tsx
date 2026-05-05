"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar(){

    const pathname = usePathname();

    return (
        <div className="absolute z-[100] flex w-full">
            <nav className="bg-white flex flex-row w-full shadow-lg h-[100px]">
                <div className="flex justify-center items-center ml-[50px]">
                    <Link href="/">
                        <Image
                        src="/images/logo.png"
                        width={330}
                        height={225}
                        alt="Logo CarbonTide"
                        className="w-[255px] md:w-[330px] h-auto transition-all"
                        />
                    </Link>
                </div>

                <div className="flex flex-row justify-center items-center w-[1000px] gap-20 ml-180 ">

                    <Link href='/beli-kredit' className="hover: hover:underline transition-colors">
                        Beli Kredit
                    </Link>

                    <Link href='/beli-kredit' className="hover: hover:underline transition-colors">
                        Dashboard Penjual
                    </Link>

                    <Link href='/beli-kredit' className="hover: hover:underline transition-colors">
                        Buat Proyek (MRV)
                    </Link>
                </div>
                

            </nav>
        </div>
    )
}