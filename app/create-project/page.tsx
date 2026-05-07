"use client"
import { Dispatch, SetStateAction, useState } from "react";
import SetUp from "@/sections/create-project/setup";
import Data from "@/sections/create-project/data";
import Risk from "@/sections/create-project/risk";
import Report from "@/sections/create-project/report";
import { MetodologiType, FormStateSetter, StepType, RisikoType, ReportParams } from "@/interfaces/interface";

function InputStep({ step, formStateSetters }: { step: number, formStateSetters: FormStateSetter })
{
    const setUpParams = formStateSetters.setUpParams;
    const dataParams = formStateSetters.dataParams;
    const riskParams = formStateSetters.riskParams;
    const setStep = formStateSetters.setStep

    const Forms = [
        <SetUp stateSetters={setUpParams} setStep={setStep}/>, 
        <Data stateSetters={dataParams} setStep={setStep}/>, 
        <Risk stateSetters={riskParams} setStep={setStep}/>
    ]

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

export default function CreateProject()
{

    const [step, setStep] = useState<StepType>(0);

    const namaProyekProps = useState("");
    const luasAreaProps = useState(0);
    const deforestasiProps = useState(0);
    const metodologiProps = useState<MetodologiType>("VM0033 (Verra Blue Carbon)");

    const jumlahPohonProps = useState(0);
    const avgDbhProps = useState(0);
    const avgTinggiProps = useState(0);
    const rtsRatioProps = useState(0);
    const carbonProps = useState(0);
    const grossCarbonProps = useState(0);

    const risikoProps = useState<RisikoType>("Sedang (Medium Risk) - 15% Buffer Deduction");
    const dokumenProps = useState("");
    const creditProps = useState(0);

    const reportParams: ReportParams = {
        luasProyek: luasAreaProps[0],
        jumlahPohon: jumlahPohonProps[0],
        avgDbh: avgDbhProps[0],
        avgTinggi: avgTinggiProps[0],
        rtsRatio: rtsRatioProps[0],
        carbon: carbonProps[0],
        credit: creditProps[0],
    } 
    
    const formStateSetters: FormStateSetter = {
        setUpParams: {namaProyekProps, luasAreaProps, deforestasiProps, metodologiProps},
        dataParams: {jumlahPohonProps, avgDbhProps, avgTinggiProps, rtsRatioProps, carbonProps, grossCarbonProps},
        riskParams: {risikoProps, dokumenProps, creditProps},
        setStep,
    }

    return (
        <div className="flex justify-center">
            {step < 3 ? <InputStep step={step} formStateSetters={formStateSetters}/> : <Report setStep={setStep} reportParams={reportParams}/>}
        </div>
    );
}