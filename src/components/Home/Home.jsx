import React from 'react';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';

function Home (){
return(
    <main>
        <NavBar/>
        
        <div className='cards-espacio'>
            <Card/>
        </div>
    </main>
)
}

export default Home