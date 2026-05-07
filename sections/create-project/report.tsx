import { Button } from "@/components/ui/button";
import { ReportParams, StepType } from "@/interfaces/interface";
import { ArrowLeft } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function Report({ setStep, reportParams }: { setStep: Dispatch<SetStateAction<StepType>>, reportParams: ReportParams })
{
    return (
        <div className="flex flex-col gap-10 mt-35 w-305">
            <Button 
                className="w-60 h-12 bg-gray-200 text-text-primary hover:bg-gray-300"
                onClick={() => setStep(2)}
            >
                <ArrowLeft className="size-6.5"/>
                <p>Kembali Edit Data</p>
            </Button>
        </div>
    );
}