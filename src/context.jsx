import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const TopTittleContext = createContext();

export const TopTittleProvider = props => {
    const { children } = props;
    const [title, setTitle] = useState("Мэню");
    return(
        <TopTittleContext.Provider value={{ title, setTitle }}>
            { children }
        </TopTittleContext.Provider>
    )
}

export const useTopTittleContext = () => useContext(TopTittleContext)