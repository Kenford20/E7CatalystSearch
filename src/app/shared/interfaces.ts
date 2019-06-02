export interface ISkill {
    Skills: number[]
}

export interface ICatalyst {
    [catalyst: string]: ISkill
}

export interface IHeroes { 
    [hero: string]: ICatalyst
}
