import React from "react";
import { createContext, useState } from "react";

export const TypeContext = createContext();

export const TypeProvider = ({children}) => {
    const [type, setType] = useState('all');

    return(
        <TypeContext.Provider value={{type, setType}}>
            {children}
        </TypeContext.Provider>
    )
}