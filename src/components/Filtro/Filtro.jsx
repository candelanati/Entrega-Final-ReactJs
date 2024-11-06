import React from 'react';
import './Filtro.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductBox } from '../Card/Card';

function Filtro (){
    const path = useParams()
    const filtro = path.color

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/productos.json')
        .then((res) => res.json())
        .then((data) => {
            const productos = data.Productos
            const filtrados = productos.filter((p) => p.color === filtro)
            setData(filtrados);
        })
        .catch((error) => console.error('Error al cargar el JSON:', error));
    }, [filtro]);
    
    if(data.length===0){
        return(
            <p>No se encontro ningun producto.</p>
        )
    }


    return(
        <>
            {data && data.map((producto)=>{
                return(
                    <ProductBox key={producto.id} producto={producto}></ProductBox>
                )
            })} 
        </>
    );
}
export default Filtro