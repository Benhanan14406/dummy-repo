"use client"
import { useState } from "react";
import SetUp from "@/sections/create-project/setup";
import Data from "@/sections/create-project/data";
import Risk from "@/sections/create-project/risk";
import { MetodologiType, FormStateSetter, StepType } from "@/interfaces/interface";

function InputStep({ step, formStateSetters }: { step: number, formStateSetters: FormStateSetter })
{
    const setUpParams = formStateSetters.setUpParams;
    const dataParams = formStateSetters.dataParams;
    const setStep = formStateSetters.setStep

    const Forms = [<SetUp stateSetters={setUpParams} setStep={setStep}/>, <Data stateSetters={dataParams} setStep={setStep}/>, <Risk />]

    return (
        <div className="flex flex-col gap-10 mt-30 w-305">
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

    const [step, setStep] = useState<StepType>(0);

    const methodologies = ["VM0033 (Verra Blue Carbon)", "AR-ACM0003 (A/R CDM)"];

    const namaProyekProps = useState("");
    const luasAreaProps = useState(0);
    const deforestasiProps = useState(0);
    const metodologiProps = useState<MetodologiType>("VM0033 (Verra Blue Carbon)");

    const jumlahPohonProps = useState(0);
    const avgDbhProps = useState(0);
    const avgTinggiProps = useState(0);
    const rtsRatioProps = useState(0);
    const carbonProps = useState(0);
    
    const formStateSetters: FormStateSetter = {
        setUpParams: {namaProyekProps, luasAreaProps, deforestasiProps, metodologiProps},
        dataParams: {jumlahPohonProps, avgDbhProps, avgTinggiProps, rtsRatioProps, carbonProps},
        riskParams: {},
        setStep,
    }

    return (
        <div className="flex justify-center">
            {step < 3 ? <InputStep step={step} formStateSetters={formStateSetters}/> : <ReportStep />}
        </div>
    );
}