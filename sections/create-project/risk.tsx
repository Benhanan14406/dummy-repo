import { 
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Steps from "./steps";
import { RiskParams, RisikoType, StepType } from "@/interfaces/interface";
import { Dispatch, SetStateAction } from "react";
import { ArrowRight } from "lucide-react";
import { 
    Combobox,
    ComboboxInput,
    ComboboxItem,
    ComboboxContent
} from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { Upload } from 'lucide-react';

export default function Risk({ stateSetters, setStep }: { stateSetters: RiskParams, setStep: Dispatch<SetStateAction<StepType>> })
{
    const { risikoProps, dokumenProps } = stateSetters;
    const risks = ["Rendah (Low Risk) - 10% Buffer Deduction", "Sedang (Medium Risk) - 15% Buffer Deduction", "Tinggi (High Risk) - 20% Buffer Deduction"];

    const [risiko, setRisiko] = risikoProps;
    const [dokumen, setDokumenProps] = dokumenProps;

    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex flex-col gap-7 mb-20">
            <Steps step={2}/>
            <Card className="flex w-305 items-center justify-center py-7">
                <div className="flex flex-col items-center w-280.5 mx-auto gap-7">
                    <CardHeader className="w-full">
                        <CardTitle className="text-sh-l font-bold w-full border-b-text-secondary border-b pb-5">
                            Risk Assessment & Dokumen
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-10 w-full items-center">
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex flex-col gap-1 w-134">
                                <Label htmlFor="">Tingkat Risiko (Permanence & Leakage)</Label>
                                <Combobox items={risks}>
                                    <ComboboxInput placeholder="Select a Methodology" value={risiko} className="w-full h-11"/>
                                    <ComboboxContent>
                                        {
                                            risks.map((risk, index) => (
                                                <ComboboxItem key={index} value={risk} onClick={() => {
                                                    const staterisk = risk as RisikoType;
                                                    setRisiko(staterisk);
                                                }} className="hover:bg-gray-200">
                                                    {risk}
                                                </ComboboxItem>
                                            ))
                                        }
                                    </ComboboxContent>
                                </Combobox>
                            </div>
                            <p className="text-c-s text-text-secondary">*Penilaian risiko mempengaruhi jumlah kredit yang harus dicadangkan di Buffer Pool.</p>
                        </div>
                        <div className="flex flex-col w-full gap-4 bg-surface border-[#D9D9D9] border py-7 px-7 rounded-[8px]">
                            <div className="flex flex-row justify-between w-full">
                                <p>Gross Carbon Stock:</p>
                                <p className="font-bold">8,110 tCO₂e</p>
                            </div>
                            <div className="flex flex-row justify-between w-full text-[#D13458]">
                                <p>Risk Buffer Deduction (15%):</p>
                                <p className="font-bold">- 1,217 tCO₂e</p>
                            </div>
                            <div className="flex flex-row justify-between w-full text-primary border-t pt-4">
                                <p>Final Issuable Credits:</p>
                                <p className="font-bold">6,894 tCO₂e</p>
                            </div>
                        </div>
                        <Input
                            type="file" 
                            className="hidden"
                            onChange={(e) => {setDokumenProps(e.target.value)}}
                            ref={fileInputRef}
                        />
                        <div 
                            className="flex flex-col py-10 w-full gap-1 items-center border-dashed border-2 borger-[#94A3B8] bg-surface hover:bg-gray-100 rounded-[8px] hover:cursor-pointer"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <Upload className="size-16" color="#94A3B8"/>
                            <div className="flex flex-col gap-1 text-text-secondary items-center">
                                <p className="font-bold">Unggah Dokumen Verifikasi Lapangan</p>
                                <p>(Field Survey Report, Lab Results SOC, Satellite Evidence)</p>
                            </div>
                            
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-row gap-5 w-full bg-transparent py-">
                        <Button 
                            className="flex items-center justify-center w-83.5 h-14.5 text-c-l font-bold bg-gray-200 hover:cursor-pointer hover:bg-gray-300"
                            onClick={() => setStep(1)}
                        >
                            <p>Kembali</p>
                        </Button>
                        <Button 
                            className="flex items-center justify-center w-185 h-14.5 font-bold text-white hover:cursor-pointer hover:bg-blue-700"
                            onClick={() => setStep(3)}
                        >
                            <p className="text-sh-l">Generate  PDD & MRV Report</p>
                            <ArrowRight className="size-5"/>
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        </div>
    );
}