import Image from "next/image";
import { Card } from "@/components/ui/card";
import { TrendingUp, ChartColumn } from "lucide-react";

export default function Why()
{
    return (
        <div className="flex flex-col items-center w-342 gap-10">
            <div className="flex flex-row justify-center items-center gap-3 text-h1 font-bold">
                <p>Mengapa</p>
                <Image
                    src="/images/logo.png"
                    width={200}
                    height={175}
                    alt="Logo CarbonTide"
                    className="h-auto transition-all"
                />
                <p>Hadir?</p>
            </div>
            <p className="w-270.5 text-center text-sh-l">
                Indonesia memiliki 17% cadangan blue carbon global (3,0 Pg C), 
                namun realisasinya di pasar karbon masih kurang dari 3%. 
                Kesenjangan ini disebabkan oleh hambatan struktural MRV yang kompleks.
            </p>
            <div className="flex flex-row gap-5">
                <Card className="flex flex-col bg-white shadow-2xl items-center justify-center w-107.5 py-13 gap-8">
                    <div className="flex flex-col items-center gap-8 w-92">
                        <div className="flex size-20 bg-[#FFE4E6] items-center justify-center rounded-[16px]">
                            <TrendingUp className="size-10" color="#D74A6A"/>
                        </div>
                        <p className="text-h3 font-bold">MRV Eksisting Mahal</p>
                        <p className="text-sh-m text-center">
                            Proses pemantauan saat ini didominasi satelit dan 
                            AI yang butuh biaya besar, 
                            menutup akses bagi pengembang proyek skala kecil.
                        </p>
                    </div>
                </Card>
                <Card className="flex flex-col bg-white shadow-2xl items-center justify-center w-107.5 py-13 gap-8">
                    <div className="flex flex-col items-center gap-8 w-92">
                        <div className="flex size-20 bg-[#FEF3C7] items-center justify-center rounded-[16px]">
                            <ChartColumn className="size-10" color="#DA7C0E"/>
                        </div>
                        <p className="text-h3 font-bold">Kalkulasi Terfragmentasi</p>
                        <p className="text-sh-m text-center">
                            Perhitungan karbon sering tidak terstandarisasi. 
                            CarbonTide menggunakan sistem rule-based transparan 
                            berstandar Verra.
                        </p>
                    </div>
                </Card>
                <Card className="flex flex-col bg-white shadow-2xl items-center justify-center w-107.5 py-13 gap-8">
                    <div className="flex flex-col items-center gap-8 w-92">
                        <div className="flex size-20 bg-[#EFF6FF] items-center justify-center rounded-[16px]">
                            <TrendingUp className="size-10" color="#3C73EE"/>
                        </div>
                        <p className="text-h3 font-bold">Akses Pasar Terbatas</p>
                        <p className="text-sh-m text-center">
                            Belum ada marketplace terintegrasi end-to-end. 
                            Kami menghubungkan suplai komunitas langsung dengan 
                            demand ESG perusahaan.
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}