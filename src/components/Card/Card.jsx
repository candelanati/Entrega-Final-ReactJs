/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import BBDD from "../../config/firebase";
import { collection } from 'firebase/firestore';
import './Card.css';
import { Link } from 'react-router-dom';
import { getDocs } from 'firebase/firestore';


function Card (){
const [data, setData] = useState([])

    useEffect(() => {
        // fetch('/productos.json')
        // .then((res) => res.json())
        // .then((data) => {
        //     // console.log(data);
        //     setData(data.Productos);
        // })
        // .catch((error) => console.error('Error al cargar el JSON:', error));
        const collectionsRef = collection(BBDD.db, "productos");
        getDocs(collectionsRef).then((snaps)=> {
            const { docs } = snaps
            const list = docs.map((doc) => ({...doc.data(), id:doc.id}))
            console.log(list)
            setData(list)
        })
    }, []);
    
    return(
        <>
            {data && data.map((producto)=>{
                // console.log(producto.titulo)
                return(
                    <ProductBox key={producto.id} producto={producto}></ProductBox>
                )
            })} 
        </>
    );
}

export function ProductBox ({producto}){
    return(
        <div className='card-posters'>
            <img src={producto.imagen} alt={"portada poster "+producto.titulo} />

            <h3>{producto.titulo}</h3>
            <h4>{producto.color}</h4>
            <p>${producto.precio}</p>

            <div className='div-boton-ver-mas'>
                <Link to={`/descripcion/${producto.id}`} className='boton-ver-mas' >ver más</Link>
            </div>
        </div>
    )
}

export default Card

