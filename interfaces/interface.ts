import { Dispatch, SetStateAction } from "react";

export type StepType = 0 | 1 | 2 | 3;
export type MetodologiType = "VM0033 (Verra Blue Carbon)" | "AR-ACM0003 (A/R CDM)";
export type RisikoType = "Rendah (Low Risk) - 10% Buffer Deduction" | "Sedang (Medium Risk) - 15% Buffer Deduction" | "Tinggi (High Risk) - 20% Buffer Deduction";

export interface SetUpParams {
    namaProyekProps: [string, Dispatch<SetStateAction<string>>],
    luasAreaProps: [number, Dispatch<SetStateAction<number>>],
    deforestasiProps: [number, Dispatch<SetStateAction<number>>],
    metodologiProps: [MetodologiType, Dispatch<SetStateAction<MetodologiType>>],
}

export interface DataParams {
    jumlahPohonProps: [number, Dispatch<SetStateAction<number>>],
    avgDbhProps: [number, Dispatch<SetStateAction<number>>],
    avgTinggiProps: [number, Dispatch<SetStateAction<number>>],
    rtsRatioProps: [number, Dispatch<SetStateAction<number>>],
    carbonProps: [number, Dispatch<SetStateAction<number>>],
    grossCarbonProps: [number, Dispatch<SetStateAction<number>>],
}

export interface RiskParams {
    risikoProps: [RisikoType, Dispatch<SetStateAction<RisikoType>>],
    dokumenProps: [string, Dispatch<SetStateAction<string>>],
    creditProps: [number, Dispatch<SetStateAction<number>>],
    grossCarbon: number,
} 

export interface ReportParams {
    luasProyek: number,
    jumlahPohon: number,
    avgDbh: number,
    avgTinggi: number,
    rtsRatio: number,
    carbon: number,
    credit: number,
}

export interface FormStateSetter {
    setUpParams: SetUpParams,
    dataParams: DataParams,
    riskParams: RiskParams,
    setStep: Dispatch<SetStateAction<StepType>>,
}