import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import DescripcionHome from './components/DescripcionHome/DescripcionHome'
import Filtrado from './components/Filtrado/Filtrado'
import Error from './components/404/404'

function App() {

  return (
      <Routes>
        <Route path="/descripcion/:id" element={<DescripcionHome/>}/>
        <Route path="/" element={<Home/>} />
        <Route path='/filtrados/:color' element={<Filtrado/>} />
        <Route path='*' element={<Error/>}/>
        
      </Routes>

  )
}

export default App
