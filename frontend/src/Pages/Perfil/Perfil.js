import { Fundo } from "./Perfil.jsx"
import HeaderP from "../../Componentes/HeaderP/HeaderP.js"
import { S, Titulo } from "./Perfil.jsx"
import { Text, Avatar, Box, Heading, Flex } from '@chakra-ui/react'
import ImgA from '../../assets/GABRIE.png'
import { Stack } from '@chakra-ui/react'
import { CardImg, NormalIcon } from "./Perfil.jsx"
import Footer from "../Footer/Footer.js"
import bolo from "../../assets/bolomilho.jpg"
import { useNavigate } from "react-router-dom";





function Perfil() {
    const navigate = useNavigate()



    const goToPostagem = () => {
        navigate('/minha')

    }
    return (
        <>
            <HeaderP />
            <Fundo>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <S>
                        <Avatar size='xl' name='Gabriela Munari' src={ImgA} />
                    </S>
                    <Box>
                        <Heading size='sm'>Gabriela Munari</Heading>
                        <Text> 📍 RS, São Leopoldo</Text>
                        <Text> - BIO: Explorando o mundo</Text>
                        <Text>  através do sabor 🌏🍽️| #Food</Text>
                    </Box>
                </Flex>
                <Stack direction='row'>
                    <Titulo>PUBLICAÇÕES</Titulo>
                    <CardImg>
                        <button>
                            <img src={bolo} alt="Descrição da imagem" onClick={goToPostagem}/>
                        </button>


                    </CardImg>




                </Stack>


                <Footer />

            </Fundo>
        </>
    )
}

export default Perfil