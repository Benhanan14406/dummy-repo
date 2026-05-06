"use client"
import { useState } from "react";
import SetUp from "@/sections/create-project/setup";
import Data from "@/sections/create-project/data";
import Risk from "@/sections/create-project/data";

function InputStep({ step }: { step: number })
{
    const Forms = [<SetUp />, <Data />, <Risk />]
    return (
        <div className="flex flex-col gap-15 mt-40 w-305">
            <div className="flex flex-col gap-5">
                <p className="text-h1 font-bold">Setup Proyek & Input MRV</p>
                <p>
                    Alur MRV end-to-end yang bisa diaudit sesuai 
                    spesifikasi Blue Carbon (AGB, BGB, SOC).
                </p>
            </div>      
            {Forms[step]}
        </div>
    );
}

function ReportStep()
{
    return (
        <div>

        </div>
    );
}


export default function CreateProject()
{
    type stepType = 0 | 1 | 2 | 3;
    const [step, setStep] = useState<stepType>(0);
    
    return (
        <div className="flex justify-center">
            {step < 3 ? <InputStep step={step}/> : <ReportStep />}
        </div>
    );
}