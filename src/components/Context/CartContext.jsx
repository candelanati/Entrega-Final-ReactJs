import { createContext, useState } from "react";

export const CartContext = createContext(null)

const CartProvider = ({children}) =>{
    const [itemsCarrito, setItemsCarrito] = useState([])

    const agregarCarrito = (item) =>{
        setItemsCarrito ((prevItems) => [...prevItems, item])
    }

    const borrarItem = (item) =>{
        setItemsCarrito ((prevItems) => 
            prevItems.filter(el => el.id !== item.id)
        )
    }

    const borraCarrito =()=>{
        setItemsCarrito([])
    }

    const value = {
        itemsCarrito,
        agregarCarrito,
        borrarItem,
        borraCarrito
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider