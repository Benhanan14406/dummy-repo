import { Dispatch, SetStateAction } from "react";

export type metodologiType = "VM0033 (Verra Blue Carbon)" | "AR-ACM0003 (A/R CDM)"

export interface SetUpParams {
    setNamaProyek: Dispatch<SetStateAction<string>>,
    setLuasArea: Dispatch<SetStateAction<number>>,
    setDeforestasi: Dispatch<SetStateAction<number>>,
    setMetodologi: Dispatch<SetStateAction<metodologiType>>,
}

export interface DataParams {

}

export interface RiskParams {

}

export interface FormStateSetter {
    setUpParams: SetUpParams,
    dataParams: DataParams,
    riskParams: RiskParams,
}