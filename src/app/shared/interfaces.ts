export interface ILocation {
    stage: string,
    mobs: number
}

export interface ILocations {
    catalystID: string,
    locations: ILocation[]
}

// Heroes to Catalysts
export interface ICatalyst {
    id: string,
    locations: ILocation[]
    awakening: number[],
    skills: number[]
}

export interface IHeroes { 
    name: string,
    catalysts: ICatalyst[]
}

// Catalysts to Heroes
export interface IHero {
    name: string,
    skills: number[],
    awakening: number[]
}

export interface ICatalysts {
    id: string,
    heroes: IHero[],
    locations: ILocation[]
}
