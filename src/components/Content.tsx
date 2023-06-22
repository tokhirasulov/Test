import { FC } from "react";
import {PluginCategory} from "./PluginCategory";
import CategoriesProvider from "./categoryContext";
import PluginsProvider from "./pluginContext";
import { Plugins } from "./Plugins";
import { PopUP } from "./popUp";
import '../style/content.css'

const Content : FC = () => {
    return (
        <>
            <div className="content">
            <CategoriesProvider>
                <PluginCategory />
            </CategoriesProvider>
            <PluginsProvider>
                <Plugins />
            </PluginsProvider>
            <PopUP />
            </div>
            
        </>
    )
}

export default Content;