import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    cart: false,
    chat:false,
    userProfile:false,
    notification: false,
}

export const ContextProvider = ({children}) =>{

    const [activeMenu, setActiveMenu] = useState(true);

    const [isClicked, setIsClicked] = useState(initialState);

    const [screenSize, setScreenSize] = useState(undefined);

    // we pass the clicked item into handleClick func, then set the value of initialState to be true
    const handleClick = (clicked) => {setIsClicked({ ...initialState, [clicked]: true });}

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);