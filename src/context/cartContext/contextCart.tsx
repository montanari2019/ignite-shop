import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function useCartContext(){
    const context = useContext(CartContext)

    return context
}