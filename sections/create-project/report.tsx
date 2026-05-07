import { Button } from "@/components/ui/button";
import { ReportParams, StepType } from "@/interfaces/interface";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { 
    Card,
    CardHeader,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { ancizarSerif } from "@/utils/font";

function ReportCardField( { name, value }: { name: string, value: string })
{
    return (
        <div className="flex flex-row items-center justify-between w-123.5 text-sh-l pb-2 border-b border-text-secondary">
            <p className="font-bold text-text-secondary">{name}</p>
            <p className="font-bold">{value}</p>
        </div>
    )
}

function ReportCardSubtitle({ title }: { title: string })
{
    return (
        <div className="flex px-4 border-l-3 border-primary">
            <p className="font-bold text-h3">{title}</p>
        </div>
    );
}

function ReportCard({ reportParams }: { reportParams: ReportParams })
{
    const { luasProyek, jumlahPohon, avgDbh, avgTinggi, rtsRatio, carbon, credit } = reportParams;
    return (
        <Card className="rounded-none shadow-lg w-full p-7 gap-7">
            <CardHeader className="flex flex-row justify-between w-full border-b border-text-primary px-0">
                <div className="flex flex-col gap-2 font-bold">
                    <p className={`${ancizarSerif.className} tracking-[20%] text-3xl`}>CARBONTIDE REGISTRY</p>
                    <p className="text-sh-l text-text-secondary">Laporan MRV Otomatis & Estimasi Karbon</p>
                </div>
                <div className="flex flex-col text-sh-l items-end text-text-secondary">
                    <p>ID Laporan: CT-MRV-1028</p>
                    <p>Dicetak: 6/5/2026</p>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-5 px-0 pb-5">
                <ReportCardSubtitle title="A. Parameter Input Lapangan"/>
                <div className="flex flex-row gap-3 pb-10 pt-8 bg-surface justify-center border border-gray-400 rounded-[8px]">
                    <div className="flex flex-row gap-20">
                        <div className="flex flex-col gap-4">
                            <ReportCardField name="Total Luas Proyek" value={`${luasProyek} Hektar`}/>
                            <ReportCardField name="Rata-rata DBH" value={`${avgDbh} cm`}/>
                            <ReportCardField name="Rasio Root-to-Shoot (BGB)" value={`${rtsRatio}`}/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <ReportCardField name="Jumlah Sample Pohon" value={`${jumlahPohon} Pohon`}/>
                            <ReportCardField name="Rata-rata tinggi pohon" value={`${avgTinggi} m`}/>
                            <ReportCardField name="Kandungan SOC / Ha" value={`${carbon} tC`}/>
                        </div>
                    </div>
                </div>
                <ReportCardSubtitle title="B. Metodologi & Ekivalen Karbon"/>
                <p>
                    Kalkulasi ini menggunakan algoritma konversi berbasis Persamaan 
                    Alometrik (Allometric Equation) yang diakui secara global untuk 
                    ekosistem Blue Carbon. Estimasi biomassa dihitung berdasarkan 
                    kepadatan kayu (wood density), diameter setinggi dada (DBH), 
                    dan tinggi pohon, yang kemudian dikonversi menjadi unit karbon (C) 
                    dengan faktor pengali 0.47, dan pada akhirnya diekivalensikan 
                    menjadi Ton Karbon Dioksida (CO₂e) menggunakan rasio berat 
                    molekul 3.67. Perhitungan ini juga mencakup cadangan karbon 
                    bawah tanah (BGB) dan tanah (SOC), serta dikurangi Buffer Risiko 
                    sebesar 15%.
                </p>
                <div className="flex flex-row w-full items-center justify-evenly bg-tertiary rounded-[16px] shadow-lg py-5">
                    <div className="flex flex-col gap-1 items-center">
                        <p className="text-text-secondary">ESTIMASI  TOTAL BIOMASA (C)</p>
                        <p className="text-h3 font-bold text-white">{carbon} tC</p>
                    </div>
                    <ArrowRight className="size-9.5" color="#8EC1EF"/>
                    <div className="flex flex-col gap-1 items-center text-[#8EC1EF]">
                        <p>KREDIT KARBON DISETUJUI</p>
                        <p className="text-h3 font-bold">{credit} tCO₂e</p>
                    </div>
                </div>
                <CardFooter className="flex flex-row justify-between items-end px-0 bg-transparent">
                    <div className="flex flex-col gap-1 text-text-secondary w-133">
                        <p>
                            *Laporan ini digenerasi secara otomatis (Auto-generated) oleh 
                            CarbonTide Validation Engine dan siap dilanjutkan untuk 
                            listing di marketplace.
                        </p>
                        <p className="font-bold">Confidence Level: High.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 size-50 rounded-full border border-primary">
                        <ShieldCheck className="size-13.5" color="#2563EB"/>
                        <p className="text-h2 text-primary text-center">VERIFIED ENGINE</p>
                    </div>
                </CardFooter>
            </CardContent>
        </Card>
    );
}

export default function Report({ setStep, reportParams }: { setStep: Dispatch<SetStateAction<StepType>>, reportParams: ReportParams })
{
    return (
        <div className="flex flex-col gap-7 mt-35 w-305 mb-15">
            <Button 
                className="w-60 h-12 bg-gray-200 text-text-primary hover:bg-gray-300"
                onClick={() => setStep(2)}
            >
                <ArrowLeft className="size-6.5"/>
                <p>Kembali Edit Data</p>
            </Button>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-2">
                    <p className="text-h1 font-bold">Laporan Verifikasi (Auto-Generated)</p>
                    <p className="text-sh-l">Draft dokumen hasil kalkulasi MRV sebelum diterbitkan ke inventaris.</p>
                </div>
                <Button className="w-52.5 h-12 hover:bg-blue-700">
                    <p className="font-bold">Tambahkan Listing</p>
                    <ArrowRight className="size-5"/>
                </Button>
            </div>
            <ReportCard reportParams={reportParams}/>
        </div>
    );
}