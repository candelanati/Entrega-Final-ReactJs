import React from 'react';
import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';
import Filtro from '../Filtro/Filtro';

function Home (){
return(
    <main>
        <NavBar/>
        <Logo/>
        <div className='cards-espacio'>
            <Filtro />
        </div>
    </main>
)
}

export default Home