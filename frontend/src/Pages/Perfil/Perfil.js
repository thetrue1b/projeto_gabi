import { Fundo } from "./Perfil.jsx"
import HeaderP from "../../Componentes/HeaderP/HeaderP.js"
import { S, Titulo } from "./Perfil.jsx"
import { Text, Avatar, Box, Heading, Flex } from '@chakra-ui/react'
import ImgA from '../../assets/GABRIE.png'
import { Stack } from '@chakra-ui/react'
import { CardImg} from "./Perfil.jsx"
import Footer from "../Footer/Footer.js"
import bolo from "../../assets/bolomilho.jpg"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import { baseUrl } from "../../services/api.js"
import axios from "axios"

function Perfil() {

    const id = localStorage.getItem("user")
    const formData= {
        id: id
    }
    const imagens = 'http://localhost:3008/uploads/';

    const [user, setUser] = useState([])

    useEffect(() => {
        axios.post(`${baseUrl}/find/findUser`, formData)
        .then(function (response){
            setUser(response.data.data)
        })
        .catch(function (error){
            alert(error.response.data.msg)
        });
    }, []);

    const navigate = useNavigate()
    const goToPostagem = () => {
        navigate('/minha')
    }

    return (
        <>        
        {user ? (
            <>
            <HeaderP userData={user}/>
                <Fundo>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <S>
                            <Avatar size='xl' name={user.nome} src={imagens + user.imagem} />
                        </S>
                        <Box>
                            <Heading size='sm'>{user.email}</Heading>
                            <Text>{user.nome}</Text>

                        </Box>
                    </Flex>
                    <Stack direction='row'>
                        <Titulo>PUBLICAÇÕES</Titulo>
                        <CardImg>
                            <button>
                                <img src={bolo} alt="Descrição da imagem" onClick={goToPostagem} />
                            </button>


                        </CardImg>




                    </Stack>


                    <Footer />

                </Fundo></>
        ) : (
            <></>
        )}

        </>
    )
}

export default Perfil