"use client"
import Steps from "./steps";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Combobox,
    ComboboxContent,
    ComboboxInput,
    ComboboxItem
} from "@/components/ui/combobox";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MetodologiType, SetUpParams, StepType } from "@/interfaces/interface";
import { Dispatch, SetStateAction } from "react";

export default function SetUp({ stateSetters, setStep }: { stateSetters: SetUpParams, setStep: Dispatch<SetStateAction<StepType>> })
{
    const { namaProyekProps, luasAreaProps, deforestasiProps, metodologiProps } = stateSetters;
    const methodologies = ["VM0033 (Verra Blue Carbon)", "AR-ACM0003 (A/R CDM)"]

    const [namaProyek, setNamaProyek] = namaProyekProps;
    const [luasArea, setLuasArea] = luasAreaProps;
    const [deforestasi, setDeforestasi] = deforestasiProps;
    const [metodologi, setMetodologi] = metodologiProps;

    return (
        <div className="flex flex-col w-full gap-7 items-center justify-center">
            <Steps step={0}/>
            <Card className="w-full py-7">
                <div className="flex flex-col items-center w-280.5 mx-auto gap-7">
                    <CardHeader className="w-full">
                        <CardTitle className="text-sh-l font-bold w-full border-b-text-secondary border-b pb-5">
                            Identitas & Baseline Proyek
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-row gap-10 text-c-l w-full">
                        <div className="flex flex-col gap-5 w-135">
                            <div className="flex flex-col gap-1 w-full">
                                <Label htmlFor="namaProyek">Nama Proyek</Label>
                                <Input 
                                    id="namaProyek" 
                                    value={namaProyek}
                                    placeholder="Draft Proyek Mangrove" 
                                    className="placeholder-text-secondary h-11 w-full"
                                    onChange={(e) => setNamaProyek(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <Label htmlFor="metodologi">Metodologi (Registry)</Label>
                                <Combobox items={methodologies}>
                                    <ComboboxInput placeholder="Select a Methodology" value={metodologi} className="w-full h-11"/>
                                    <ComboboxContent>
                                        {
                                            methodologies.map((method, index) => (
                                                <ComboboxItem key={index} value={method} onClick={() => {
                                                    const stateMethod = method as MetodologiType;
                                                    setMetodologi(stateMethod);
                                                }} className="hover:bg-gray-200">
                                                    {method}
                                                </ComboboxItem>
                                            ))
                                        }
                                    </ComboboxContent>
                                </Combobox>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 w-135">
                            <div className="flex flex-col gap-1 w-full">
                                <Label htmlFor="luasArea">Total Luas Area (ha)</Label>
                                <Input 
                                    id="luasArea" 
                                    value={luasArea}
                                    placeholder="10" 
                                    className="placeholder-text-secondary h-11 w-full"
                                    onChange={(e) => setLuasArea(Number(e.target.value))}
                                />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <Label htmlFor="deforestasi">Deforestasi Historis (%)</Label>
                                <Input 
                                    id="deforestasi"
                                    value={deforestasi} 
                                    placeholder="2.5" 
                                    className="placeholder-text-secondary h-11 w-full"
                                    onChange={(e) => setDeforestasi(Number(e.target.value))}
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="w-full bg-transparent py-">
                        <Button 
                            className="flex items-center justify-center w-full h-14.5 text-sh-l font-bold text-white hover:cursor-pointer hover:bg-blue-700"
                            onClick={() => setStep(1)}
                        >
                            <p>Lanjut ke Data Biomasa</p>
                            <ArrowRight className="size-5"/>
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        </div>
    );
}