import { 
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from 'lucide-react';

export default function Hero()
{
    return (
        <Card className="flex flex-col items-center justify-center gap-20 bg-linear-to-r w-342 h-162.5 from-[#0C2B67] to-[#082F77] text-white">
            <CardHeader className="flex flex-col gap-10 w-306 justify-center">
                <div className="flex flex-row gap-2.5 items-center justify-center bg-[#3D5188] w-100 h-7.5 rounded-sm">
                    <Globe color="#8EC1EF"/>
                    <p className="text-sh-l font-bold text-[#8EC1EF]">SOLUSI END-TO-END BLUE CARBON</p>
                </div>
                <CardTitle className="font-bold text-[64px]">
                    Menjembatani Potensi{" "}
                    <span className="bg-linear-to-b from-primary to-[#445F9A] bg-clip-text text-transparent">Mangrove</span>{" "}
                    ke Pasar Karbon Global
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-start w-306">
                <div className="flex flex-col gap-15 w-182.5">
                    <p className="text-sh-l">
                        Platform all-in-one yang menggabungkan perhitungan MRV manual transparan, 
                        generasi laporan otomatis, dan marketplace terintegrasi. 
                        Membuka akses pendanaan bagi komunitas pesisir secara mudah dan kredibel.
                    </p>
                    <div className="flex flex-row gap-10">
                        <Button className="flex flex-row items-center justify-center gap-1 w-82.5 h-14.5 text-sh-l font-bold">
                            <p>Jelajahi Proyek</p>
                            <ArrowRight className="size-9.5 font-bold"/>
                        </Button>
                        <Button className="flex flex-row gap-4 bg-[#1E293B] border-[#94A3B8] border text-sh-l w-91 h-14.5 font-bold">
                            <FileText className="size-7"/>
                            <p>Daftar Proyek (MRV)</p>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}