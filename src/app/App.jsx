import {useState} from "react";
import ThemeContext from "./contexts/ThemeContext";
import MainMenu from "./components/Menu/MainMenu/MainMenu";
import Header from "./components/Header/Header";
function App() {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "light")
    }
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    if (!localStorage.getItem("showSecondaryMenu")) {
        localStorage.setItem("showSecondaryMenu", "false")
    }
    const [isShow, setIsShow] = useState(localStorage.getItem("showSecondaryMenu"));
    const path = (window.location.pathname).split("/")
    const [selectedMenu, setSelectedMenu] = useState(path[2]);
    const body = document.getElementById("body");

    if (body) {
        document.onclick = (e) => {
            if (window.innerWidth < 768 && body.contains(e.target)) {
                setIsShow("false")
                localStorage.setItem("showSecondaryMenu", "false")
            }
        }
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme, isShow, setIsShow, selectedMenu, setSelectedMenu}}>
            <div className={`${theme === "light" ? "light" : "dark"}`}>
                <Header/>
                <MainMenu/>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
