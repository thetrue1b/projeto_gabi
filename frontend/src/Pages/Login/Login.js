import { Input } from '@chakra-ui/react'
import { CardLogin, Imagem, Fundo, Titulo, Estilização, BotaoLogin, H1Clique, MesmaLinha, BotaoClique, } from './style'
import ImgLogo from '../../assets/logo.png'
import { Button} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const goToHome = ()=>{
        navigate('/Inicial') 
    }

    const hadleSubmit = (e) => {
        e.preventDefault()

        const credentials = { email, password }

        axios.post('http://localhost:8000/login', credentials, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                alert(response.data.message)
                goToHome()
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <Fundo>
                <Imagem src={ImgLogo} />
                <CardLogin onSubmit={hadleSubmit}>
                    <Titulo>LOGIN</Titulo>
                    <Estilização>
                        <Input
                            variant='email'
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </Estilização>
                    <Estilização>
                        <Input 
                        variant='senha' 
                        placeholder='senha' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </Estilização>
                    <MesmaLinha>
                        <H1Clique>Não tem cadastro?</H1Clique>
                        <BotaoClique>
                            <Button colorScheme='gray' variant='ghost' color='white'>
                                <Link to="/Cadastro">
                                    clique aqui
                                </Link>
                            </Button>
                        </BotaoClique>
                    </MesmaLinha>

                    <BotaoLogin>
                        <Button colorScheme='gray' variant='outline' fontSize='20px' color='white' type='submit'>
                        <Link to="/Inicial">
                            ENTRAR
                                </Link>
                        </Button>
                    </BotaoLogin>
                </CardLogin>

            </Fundo>



        </>



    )

}



export default Login