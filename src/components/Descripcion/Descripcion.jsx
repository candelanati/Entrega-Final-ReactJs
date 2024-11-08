import React from 'react';
import './Descripcion.css'
import BBDD from "../../config/firebase";
import { collection } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ButtonAddCart from '../ButtonAddCart/ButtonAddCart.jsx'

function Descripcion (){
    const path = useParams()
    const idProducto = path.id

    const [data, setData] = useState([]);
    useEffect(() => {
        const collectionsRef = collection(BBDD.db, "productos");
        getDocs(collectionsRef).then((snaps)=> {
            const { docs } = snaps
            const list = docs.map((doc) => ({...doc.data(), id:doc.id}))
            setData(list)
        })
    }, []);
    
    const producto = data.find((p) => p.id === idProducto);
    
    if (!producto) {
        return <h2 className="loading">Cargando...</h2>;
    }
    return(
        <>
        <div className='div-titulo'>
            <h1 className='titulo-descripcion'>{producto.titulo}</h1>
        </div>
        <div className='div-descripcion-entera'>
            
            <div className='div-card-poster'>
                <img src={producto.imagen} alt={"portada poster "+producto.titulo} />
            </div>
            <div className='info-descripcion-producto'>
                <h2>Detalles:</h2>
                <p>Precio: ${producto.precio}</p>
                <div className='descripcion-producto'>
                    <p>Descripción: {producto.descripcion}</p>
                </div>
                <ButtonAddCart item={producto}/>
            </div>
            

        </div>
        </>
        
    )
}

export default Descripcion