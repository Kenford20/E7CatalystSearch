export interface ISkill {
    Skills: number[]
}

export interface IArtifact {
    [artifact: string]: ISkill
}

export interface IHeroes { 
    [hero: string]: IArtifact
}
