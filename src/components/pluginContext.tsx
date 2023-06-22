import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export type Plugins = {
    plugins: {}[]; 
}
export interface PluginsContextInterface{
    plugins: Plugins,
    setPlugins: Dispatch<SetStateAction<Plugins>>
}

const defaultPlugins = {
        plugins: {
            plugins: [{
                name: "Plugin name",
                category:"Plugin category",
                description: "Plugin description",
            },{
                name: "Plugin name",
                category:"Plugin category",
                description: "Plugin description",
            }]
        },
    setPlugins: (plugins: Plugins) => {}
    
} as PluginsContextInterface

export const PluginsContext = createContext(defaultPlugins)

type PluginsProviderProps = {
    children: ReactNode 
}

export default function CategoriesProvider({children}: PluginsProviderProps){
    const [plugins, setPlugins] = useState<Plugins>({
        plugins: [{
            name: "Plugin name",
            category:"Plugin category",
            description: "Plugin description",
        },{
            name: "Plugin name",
            category:"Plugin category",
            description: "Plugin description",
        }]
    })

    return (
        <PluginsContext.Provider value={{plugins, setPlugins}}>
            {children}
        </PluginsContext.Provider>
    )
}