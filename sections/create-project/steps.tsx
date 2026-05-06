import { FileText, TreePine, ShieldCheck } from 'lucide-react';
import { Card } from "@/components/ui/card";
import content from '*.avif';

export default function Steps({ step }: { step: number })
{
    const notYet = "#94A3B8";
    const currentOrDone = "#2563EB";
    const stepsExist = [
        {
            icon: <FileText color={currentOrDone}/>,
            name: "Setup Proyek"
        },
        {
            icon: <TreePine color={step >= 1 ? currentOrDone : notYet}/>,
            name: "Biomass & Soil Data"
        },
        {
            icon: <ShieldCheck color={step >= 2 ? currentOrDone : notYet}/>,
            name: "Risk & Report"
        }
    ]

    return (
        <Card className="flex flex-row w-full h-44 justify-evenly items-center">
            {
                stepsExist.map(
                    (stepExist, index) => {
                        const [bgColor, contentColor] = step >= index ? ["#DBEAFE", "primary"] : ["#FFFFFF", "text-secondary"]
                        return (
                            <div className="flex flex-col gap-2 items-center" key={index}>
                                <div className={`flex items-center justify-center size-17.5 rounded-full bg-[${bgColor}] border-${bgColor}] border`}>
                                    {stepExist.icon}
                                </div>
                                <p className={`text-sh-l text-${contentColor}`}>{stepExist.name}</p>
                            </div>
                        )
                    }
                )
            }
        </Card>
    );
}