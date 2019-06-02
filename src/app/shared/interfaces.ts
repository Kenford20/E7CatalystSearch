export interface ISkill {
    Skills: number[]
}

export interface ICatalysts {
    id: string,
    skills: number[]
}

export interface IHeroes { 
    name: string,
    catalysts: ICatalysts[]
}
