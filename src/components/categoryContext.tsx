import {Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";


export type Categories = {
    categories: string[]
}

export interface CategoriesContextInterface {
    categories: Categories,
    setCategories: Dispatch<SetStateAction<Categories>>
}

const defaultCategories = {
    categories: {
        categories: ["UI", "UX", "Design System", "Hand Over"],
    },
    setCategories: (categories: Categories) => {}
    
} as CategoriesContextInterface



export const CategoriesContext = createContext(defaultCategories)

type CategoriesProviderProps = {
    children: ReactNode 
}



export default function CategoriesProvider({children}: CategoriesProviderProps){
    const [categories, setCategories] = useState<Categories>({
        categories: ["UI"],
    })


    return (
        <CategoriesContext.Provider value={{categories, setCategories}}>
            {children}
        </CategoriesContext.Provider>
    )
}

// import { createContext } from "react";

// export const CategoriesContext = createContext(null)