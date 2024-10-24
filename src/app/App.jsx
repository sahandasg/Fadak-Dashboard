import {useState} from "react";
import ThemeContext from "./contexts/ThemeContext";
import Header from "./components/Header/Header";

function App() {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "light")
    }
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    return (
        <ThemeContext.Provider value={{theme, setTheme,}}>
            <div className={`${theme === "light" ? "light" : "dark"}`}>
                <Header/>

            </div>
        </ThemeContext.Provider>
    );
}

export default App;
