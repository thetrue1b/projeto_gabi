import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Home from "./Pages/Home/Home";
import { ChakraProvider } from '@chakra-ui/react';
import Inicial from "./Pages/Inicial/Inicial";
import Header from "./Componentes/Header/Header";
import Perfil from "./Pages/Perfil/Perfil";
import Postar from "./Pages/Postar/Postar";
import MinhaP from "./Pages/MinhaP/MinhaP";
import React from 'react';
import Rotas from './rotas/Rotas'
import Footer from "./Pages/Footer/Footer";



function App() {
  return (
    <>
      <ChakraProvider>
          <Rotas/>
      </ChakraProvider>

    </>
  );
}

export default App;