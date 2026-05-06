"use client"
import { useState } from "react";
import Steps from "./steps";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function SetUp()
{
    type metodologiType = "VM0033 (Verra Blue Carbon)" | "AR-ACM0003 (A/R CDM)";
    const [namaProyek, setNamaProyek] = useState("");
    const [luasArea, setLuasArea] = useState(0);
    const [deforestasi, setDeforestasi] = useState(0);
    const [metodologi, setMetodologi] = useState<metodologiType>("VM0033 (Verra Blue Carbon)");

    return (
        <div className="flex flex-col w-full gap-7 items-center justify-center">
            <Steps step={0}/>
            <Card className="w-full py-7">
                <div className="flex flex-col items-center w-280.5 mx-auto">
                    <CardHeader className="w-full">
                        <CardTitle className="text-sh-l font-bold w-full border-b-text-secondary border-b pb-5">Identitas & Baseline Proyek</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-row gap-10">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <Label className="">Nama Proyek</Label>
                            </div>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}