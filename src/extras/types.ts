export type SlidesTypes = {
    id: string,
    name: string,
    position: number,
    photo: string
}

export type Category = {
    id: string,
    name: string,
    showInNav: boolean,
    level: string
}

export type SecondLevelCategory = {
    id: string,
    name: string,
    showInNav: boolean,
    level: string,
    categories: Category[]
}

export type FirstLevelCategory = {
    id: string,
    name: string,
    showInNav: boolean,
    level: string,
    categories: SecondLevelCategory[]
}