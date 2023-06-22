import AddButton from "./button.tsx"
import LogoImg from "./LogoImg.tsx";
import "../style/header.css"
import CategoriesProvider from "./categoryContext.tsx";

    function Header() {
        return (
            <>
                <div className="header">
                    <div className="logo">
                        <LogoImg />
                        <h1 id="title">Save Plugin</h1>
                    </div>
                    <CategoriesProvider>
                        <AddButton />
                    </CategoriesProvider>
                    
                </div>
            </>
        );
    }

export default Header;