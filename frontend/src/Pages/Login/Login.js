import { Input } from '@chakra-ui/react'
import { CardLogin, Imagem, Fundo, Titulo, Estilização, BotaoLogin, H1Clique, MesmaLinha, BotaoClique, } from './style'
import ImgLogo from '../../assets/logo.png'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { baseUrl } from "../../services/api"

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    // const [formData, setFormData] = useState({
    //     email: "",
    //     senha: ""
    // });

    // console.log(formData.senha)
    // console.log(formData.email)



    const handleSubmit = (e) => {
        e.preventDefault();
        const body ={
            'email':email,
            'senha': senha
        }
        axios.post(`${baseUrl}/auth/login`, body)
     
        .then(function (response) {
                console.log(response.data)
                localStorage.setItem('token', response.data.data[0].token)
                localStorage.setItem('user', response.data.data[0].id)
                navigate('/perfil')

            })
            .catch(function (error) {
                alert(error.response.data.msg)
            });

      
    }

    return (
        <>
                <Fundo>
                    <Imagem src={ImgLogo} />
                    <CardLogin>
                        <Titulo>LOGIN</Titulo>
            <div>
                        <Estilização>
                            <Input
                                variant='email'
                                id="email"
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder='Email'
                                required />

                        </Estilização>
                        <Estilização>
                            <Input
                                variant='senha'
                                id="senha"
                                type="password"
                                name="senha"
                                value={senha}
                                onChange={(e)=>setSenha(e.target.value)}
                                placeholder='Senha'
                                required />
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
                            <Button onClick={handleSubmit} colorScheme='gray' variant='outline' fontSize='20px' color='white' type='submit'>
                                ENTRAR
                            </Button>
                        </BotaoLogin>
            </div>
                    </CardLogin>

                </Fundo>


        </>



    )

}



export default Login