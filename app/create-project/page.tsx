"use client"
import { useState } from "react";
import SetUp from "@/sections/create-project/setup";
import Data from "@/sections/create-project/data";
import Risk from "@/sections/create-project/data";
import { metodologiType, FormStateSetter } from "@/interfaces/interface";

function InputStep({ step, formStateSetters }: { step: number, formStateSetters: FormStateSetter })
{
    const setUpParams = formStateSetters.setUpParams;

    const Forms = [<SetUp stateSetters={setUpParams}/>, <Data />, <Risk />]

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

    const methodologies = ["VM0033 (Verra Blue Carbon)", "AR-ACM0003 (A/R CDM)"];

    const [namaProyek, setNamaProyek] = useState("");
    const [luasArea, setLuasArea] = useState(0);
    const [deforestasi, setDeforestasi] = useState(0);
    const [metodologi, setMetodologi] = useState<metodologiType>("VM0033 (Verra Blue Carbon)");
    
    const formStateSetters: FormStateSetter = {
        setUpParams: {setNamaProyek, setLuasArea, setDeforestasi, setMetodologi},
        dataParams: {},
        riskParams: {},
    }

    return (
        <div className="flex justify-center">
            {step < 3 ? <InputStep step={step} formStateSetters={formStateSetters}/> : <ReportStep />}
        </div>
    );
}