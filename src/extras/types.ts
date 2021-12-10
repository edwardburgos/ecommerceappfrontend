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
    level: string,
    url: string
}

export type SecondLevelCategory = {
    id: string,
    name: string,
    showInNav: boolean,
    level: string,
    url: string,
    categories: Category[]
}

export type FirstLevelCategory = {
    id: string,
    name: string,
    showInNav: boolean,
    level: string,
    url: string,
    categories: SecondLevelCategory[]
}

export type ProductType = {
    id: string,
    url: string,
    name: string,
    description: string | null,
    price: number,
    currency: string,
    stars: number | null,
    photo: string
}