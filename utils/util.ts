


export function calcBiomass(jumlahPohon: number, avgDbh: number, avgTinggi: number)
{
    return jumlahPohon * 0.0673 * Math.pow((0.8 * Math.pow(avgDbh, 2) * avgTinggi), 0.976);
}

export function calcGrossCarbon(biomass: number, rtsRatio: number, carbon: number)
{
    return biomass + rtsRatio + carbon;
}

export function calcIssuableCredits(grossCarbon: number, riskPercentage: number)
{
    return (1-riskPercentage/100) * grossCarbon;
}

export function netralizeNumStr(numStr: string)
{
    const containsDot = numStr.search(".");
    return containsDot ? numStr : numStr+".0";
}