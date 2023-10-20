import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cadastro from '../Pages/Cadastro/Cadastro.js'
import Footer from '../Pages/Footer/Footer.js'
import Home from '../Pages/Home/Home'
import Inicial from '../Pages/Inicial/Inicial.js'
import Login from '../Pages/Login/Login.js'
import MinhaP from '../Pages/MinhaP/MinhaP.js'
import Perfil from '../Pages/Perfil/Perfil.js'
import Postar from '../Pages/Postar/Postar.js'
import Salvos from '../Pages/Salvos/Salvos.js'



function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='cadastro' element={<Cadastro/>}/>
            <Route path='inicial' element={<Inicial/>}/>
            <Route path='perfil' element={<Perfil/>}/>
            <Route path='postar' element={<Postar/>}/>
            <Route path='minha' element={<MinhaP/>}/>
            <Route path='salvos' element={<Salvos/>}/>
        
         </Routes>
        </BrowserRouter>

        
       
    )
}

export default Rotas