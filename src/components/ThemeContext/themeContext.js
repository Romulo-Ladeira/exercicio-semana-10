import { useState } from "react"
import react,{ createContext } from "react/cjs/react.development"

const themes = {
    dark:{
        corPrincipal: 'gray',
        corSecundaria: 'white',
    },
    ligth:{
        corPrincipal: 'white',
        corSecundaria: 'black',
    }
}

const ThemeContext = createContext()

const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState(themes.dark)
    console.log(theme)
    const handleClick = ()=>{
        theme===themes.dark?setTheme(themes.ligth):setTheme(themes.dark)
    }
    return <ThemeContext.Provider value={{theme, handleClick}}>{children}</ThemeContext.Provider>

}

export{ThemeContext, ThemeProvider}