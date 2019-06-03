export interface IPurposes {
    Skills?: number[],
    Awakening?: number[]
}

export interface ICatalysts {
    id: string,
    purposes: IPurposes
}

export interface IHeroes { 
    name: string,
    catalysts: ICatalysts[]
}
