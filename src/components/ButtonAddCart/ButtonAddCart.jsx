import React, { useContext, useState } from "react";

import './ButtonAddCart.css'
import { CartContext } from "../Context/CartContext";
const agregaACarrito = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>
const borrarDeCarrito = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
const cantidadCarrito = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M480-580q-17 0-28.5-11.5T440-620q0-17 11.5-28.5T480-660q17 0 28.5 11.5T520-620q0 17-11.5 28.5T480-580Zm-40-140v-200h80v200h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>

function ButtonAddCart ({item}){
    const {agregarCarrito} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)

        
        function sumaElemento(){
            console.log('en suma elemento')
            setCantidad(cantidad + 1)
            console.log(cantidad)
            
            if(cantidad<1){
               agregarCarrito(item) 
            }

            
        }

        function restaElemento(){
            console.log('en resta elemento')
            setCantidad(cantidad - 1)
            console.log(cantidad)
        }
        function eliminaElemento(){
            console.log('en elimina elemento')
            setCantidad(0)
            console.log(cantidad)
        }

    if(cantidad>=1){
        return(
            <>
                <div className="suma-y-resta-div">
                    <div className="cantidad">
                        <p>{cantidadCarrito} {cantidad}</p>
                    </div>
                    
                    <div className="suma">
                        <button onClick={sumaElemento}>+</button>
                    </div>
                    <div className="resta">
                        <button onClick={restaElemento}>-</button>
                    </div>
                    <div className="borrar">
                        <button onClick={eliminaElemento}>{borrarDeCarrito}</button>
                    </div>
                </div>
            </>
        )
    }
    return(
            <>
            {/* ver stock */}
            
                <button className='boton-comprar' onClick={()=>sumaElemento(cantidad)}>{agregaACarrito}</button>
            </>
    )
}





export default ButtonAddCart