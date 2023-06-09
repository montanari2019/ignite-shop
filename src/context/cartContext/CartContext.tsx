import { ReactNode, createContext, useState } from "react";
import { CartContextProps } from "./@types";

export const CartContext = createContext({} as CartContextProps)

interface ContextProps{
    children: ReactNode
}

export default function  CartConcextComponent({ children }: ContextProps){

    const [statusSideBar, setStatusSideBar] = useState(false)

    function activeSideBar(){
        console.log('Assionando contexto')
        if(statusSideBar == true){
            setStatusSideBar(false)
        }else{
            setStatusSideBar(true)
        }
    }
    
    return(
        <CartContext.Provider value={{statusSideBar, activeSideBar}} >
            {children}
        </CartContext.Provider>
    )
}