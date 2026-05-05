import { 
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleCheck, Calculator, ArrowRight } from 'lucide-react';


function CalculatorSection()
{
    return (
        <div className="relative -translate-y-10 flex flex-col items-center gap-4 w-156.5">
            <div className="flex justify-end w-full py-2 border-b-[#94A3B8] border-b">
                <Calculator className="items-end" color="#8EC1EF"/>
            </div>
            <Card className="flex flex-col items-center gap-7 w-full bg-[#1E293B] border-[#283346] border-2">
                <div className="flex flex-col justify-center w-xl gap-7">
                    <div className="flex flex-col justify-center w-full h-23 text-c-l gap-3 pl-5 bg-tertiary border-[#566A87] border rounded-[8px]">
                        <p className="text-text-secondary">Input DBH & Tinggi</p>
                        <p className="text-[#8EC1EF]">AGB = 0.0673 × (ρD²H)⁰.⁹⁷⁶</p>
                    </div>
                    <div className="flex flex-col justify-center w-full h-23 text-c-l gap-3 pl-5 bg-tertiary border-[#566A87] border rounded-[8px]">
                        <p className="text-text-secondary">Konversi Karbon</p>
                        <p className="text-secondary">AGB = 0.0673 × (ρD²H)⁰.⁹⁷⁶</p>
                    </div>
                    <Button className="flex flex-row gap-2 w-144.25 h-14.5">
                        <p className="text-sh-l font-bold">Coba Calculator MRV</p>
                        <ArrowRight className="size-8"/>
                    </Button>
                </div>
                
            </Card>
        </div>
    )
}


export default function Solution()
{
    return (
        <Card className="flex flex-col gap-10 w-342 bg-tertiary py-15 px-10 justify-center text-white">
            <CardHeader>
                <CardTitle className="font-bold text-4xl">
                    Solusi Terintegrasi (All-in-One)
                </CardTitle>
            </CardHeader>
            <div className="flex flex-row gap-8">
                <div className="flex flex-col gap-7">
                    <div className="flex flex-row items-center gap-4">
                        <CircleCheck className="relative size-12" color="#8EC1EF"/>
                        <div className="flex flex-col gap-3">
                            <p className="font-bold text-sh-l">1. Input Lapangan Berbasis Plot</p>
                            <p className="text-[#94A3B8] text-sh-m w-140">
                                Menggunakan data real seperti DBH dan tinggi pohon 
                                (tanpa ketergantungan AI) untuk mengestimasi biomassa 
                                via persamaan alometrik.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <CircleCheck className="relative size-12" color="#8EC1EF"/>
                        <div className="flex flex-col gap-3">
                            <p className="font-bold text-sh-l">2. Auto-MRV Report Generator</p>
                            <p className="text-[#94A3B8] text-sh-m w-140">
                                Sistem mengubah input mentah secara otomatis menjadi 
                                laporan karbon tervalidasi yang siap diaudit 
                                (Verification Layer).
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <CircleCheck className="relative size-12" color="#8EC1EF"/>
                        <div className="flex flex-col gap-3">
                            <p className="font-bold text-sh-l">3. Marketplace Terhubung</p>
                            <p className="text-[#94A3B8] text-sh-m w-140">
                                Kredit yang tervalidasi langsung terbit di inventory 
                                penjual dan siap dibeli oleh perusahaan untuk komitmen ESG mereka.
                            </p>
                        </div>
                    </div>
                </div>
                <CalculatorSection />
            </div>
        </Card>
    )
}