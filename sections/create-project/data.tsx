import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleQuestionMark, ArrowRight } from 'lucide-react';
import { DataParams, StepType } from "@/interfaces/interface";
import Steps from "./steps";
import { Dispatch, SetStateAction } from "react";
import { calcBiomass, calcGrossCarbon } from "@/utils/util";

export default function Data({ stateSetters, setStep }: { stateSetters: DataParams, setStep: Dispatch<SetStateAction<StepType>>})
{
    const { jumlahPohonProps, avgDbhProps, avgTinggiProps, rtsRatioProps, carbonProps, grossCarbonProps } = stateSetters;
    const [jumlahPohon, setJumlahPohon] = jumlahPohonProps;
    const [avgDbh, setAvgDbh] = avgDbhProps;
    const [avgTinggi, setAvgTinggi] = avgTinggiProps;
    const [rtsRatio, setRtsRatio] = rtsRatioProps;
    const [carbon, setCarbon] = carbonProps;
    const [grossCarbon, setGrossCarbon] = grossCarbonProps;

    const updateGrossCarbon = () => {
        const biomass = calcBiomass(jumlahPohon, avgDbh, avgTinggi);
        setGrossCarbon(calcGrossCarbon(biomass, rtsRatio, carbon));
    };

    return (
        <div className="flex flex-col gap-7 mb-20">
            <Steps step={1}/>
            <Card className="flex w-305 items-center justify-center py-7">
                <div className="flex flex-col items-center w-280.5 mx-auto gap-7">
                    <CardHeader className="w-full">
                        <CardTitle className="text-sh-l font-bold w-full border-b-text-secondary border-b pb-5">
                            Pengukuran Karbon (Mangrove Pools)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-10 w-full">
                        <div className="flex flex-col gap-5 w-full">
                            <div className="flex w-full h-41.5 justify-center items-center bg-surface rounded-[8px] border-[#D9D9D9] border">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-row gap-2 w-full items-start">
                                        <p className="text-c-l font-bold">Above-Ground Biomass (AGB)</p>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <CircleQuestionMark className="size-5 bg" color="#94A3B8"/>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-tertiary text-white text-center">
                                                <p>
                                                    AGB: Cadangan karbon pada bagian pohon yang 
                                                    berada di atas tanah (batang, cabang, daun).
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </div>
                                    <div className="flex flex-row gap-10">
                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="jumlahPohon">Jumlah Pohon Dihitung</Label>
                                            <Input
                                                id="jumlahPohon"
                                                value={jumlahPohon === 0 ? "" : jumlahPohon}
                                                placeholder="Misal: 100" 
                                                className="w-78 h-11 placeholder-text-secondary bg-white"
                                                onChange={(e) => setJumlahPohon(Number(e.target.value))}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="avgDbh">Rata-rata DBH (cm)</Label>
                                            <Input
                                                id="avgDbh"
                                                value={avgDbh === 0 ? "" : avgDbh}
                                                placeholder="Misal: 15" 
                                                className="w-78 h-11 placeholder-text-secondary bg-white"
                                                onChange={(e) => {
                                                    setAvgDbh(Number(e.target.value))
                                                    updateGrossCarbon();
                                                }}
                                                type="number"
                                                step={0.01}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="avgTinggi">Rata-rata Tinggi (m)</Label>
                                            <Input
                                                id="avgTinggi"
                                                value={avgTinggi === 0 ? "" : avgTinggi}
                                                placeholder="Misal: 2.5" 
                                                className="w-78 h-11 placeholder-text-secondary bg-white"
                                                onChange={(e) => {
                                                    setAvgTinggi(Number(e.target.value));
                                                    updateGrossCarbon();
                                                }}
                                                type="number"
                                                step={0.01}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full h-41.5 justify-center items-center bg-surface rounded-[8px] border-[#D9D9D9] border">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-row gap-2 w-full items-start">
                                        <p className="text-c-l font-bold">BGB & Soil Organic Carbon (SOC)</p>
                                    </div>
                                    <div className="flex flex-row gap-13">
                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="rtsRatio" className="flex flex-row gap-2 items-center">
                                                <p>Root-to-Shoot Ratio (BGB)</p>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <CircleQuestionMark className="size-5 bg" color="#94A3B8"/>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-tertiary text-white text-center">
                                                        <p>
                                                            BGB (Below-Ground Biomass): Cadangan karbon pada sistem 
                                                            akar mangrove yang kompleks di bawah tanah.
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </Label>
                                            <Input
                                                id="rtsRatio"
                                                value={rtsRatio === 0 ? "" : rtsRatio}
                                                placeholder="Misal: 100" 
                                                className="w-120 h-11 placeholder-text-secondary bg-white"
                                                onChange={(e) => {
                                                    setRtsRatio(Number(e.target.value));
                                                    updateGrossCarbon();
                                                }}
                                                type="number"
                                                step={0.01}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="carbon" className="flex flex-row gap-2 items-center">
                                                <p>Kandungan Karbon Tanah (tC/ha)</p>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <CircleQuestionMark className="size-5 bg" color="#94A3B8"/>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-tertiary text-white text-center">
                                                        <p>
                                                            SOC (Soil Organic Carbon): Karbon yang tersimpan di dalam sedimen 
                                                            lumpur/tanah mangrove, yang merupakan penyimpan terbesar.
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </Label>
                                            <Input
                                                id="carbon"
                                                value={carbon === 0 ? "" : carbon}
                                                placeholder="Misal: 15" 
                                                className="w-120 h-11 placeholder-text-secondary bg-white"
                                                onChange={(e) => {
                                                    setCarbon(Number(e.target.value));
                                                    updateGrossCarbon();
                                                }}
                                                type="number"
                                                step={0.01}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 justify-center pl-10 bg-tertiary shadow-lg h-30 rounded-[16px]">
                            <p className="text-c-l text-text-secondary">Total Gross Carbon Stock (AGB+BGB+SOC)</p>
                            <p className="text-h3 font-bold text-white">{grossCarbon} tCO₂e</p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-row gap-5 w-full bg-transparent py-">
                        <Button 
                            className="flex items-center justify-center w-83.5 h-14.5 text-c-l font-bold bg-gray-200 hover:cursor-pointer hover:bg-gray-300"
                            onClick={() => setStep(0)}
                        >
                            <p>Kembali</p>
                        </Button>
                        <Button 
                            className="flex items-center justify-center w-185 h-14.5 font-bold text-white hover:cursor-pointer hover:bg-blue-700"
                            onClick={() => setStep(2)}
                        >
                            <p className="text-sh-l">Lanjut ke Risk & Compliance</p>
                            <ArrowRight className="size-5"/>
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        </div>
    );
}