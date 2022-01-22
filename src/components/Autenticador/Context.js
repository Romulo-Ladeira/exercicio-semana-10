import react,{createContext, useState} from "react";

const AutenticadorContext = createContext()

const AutenticadorProvider = ({children}) =>{
    const[ autenticado, setAutenticado] = useState(false)
    return <AutenticadorContext.Provider  value={{autenticado, setAutenticado}}>{children}</AutenticadorContext.Provider>
}

export{AutenticadorContext, AutenticadorProvider}