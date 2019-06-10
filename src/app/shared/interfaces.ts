export interface IPurposes {
    Skills?: number[],
    Awakening?: number[]
}

export interface ILocation {
    stage: string,
    mobs: number
}

export interface ILocations {
    catalystID: string,
    locations: ILocation[]
}

export interface ICatalysts {
    id: string,
    locations: ILocation[]
    purposes: IPurposes
}

export interface IHeroes { 
    name: string,
    catalysts: ICatalysts[]
}
