import { Input } from '@chakra-ui/react'
import { Fundo } from "./Cadastro.jsx"
import { CardCadastro } from './Cadastro.jsx'
import ImgLogo from '../../assets/logo.png'
import { Imagem} from './Cadastro.jsx'
import { Titulo } from './Cadastro.jsx'
import { Estilização } from './Cadastro.jsx'
import { Button } from '@chakra-ui/react'
import { BotaoCadastro } from './Cadastro.jsx'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import { baseUrl } from "../../services/api";
import axios from "axios";




 
function Cadastro (){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: "",

        email: "",

        senha: "",

        confirmSenha: ""

    });
    console.log(formData)


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.senha !== formData.confirmSenha){
            alert("Senhas não coincidem")
        } else{
            const response = await axios.post(`${baseUrl}/user/create`, formData);
            if(response.data.success) {
                alert('Usuario cadastrado')
                navigate('/login')

            } else {

                alert('Não foi possivel cadastrar');

            }
 

        }
        setFormData({
            nome: "",
            email: "",
            senha: "",
            confirmSenha: ""

        });

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value

        });

    }
    return (
        <>
        <Fundo>
        <Imagem src={ImgLogo}/>

        <form onSubmit={handleSubmit}>
         <CardCadastro>
            <Titulo>CADASTRO</Titulo>

            <Estilização>
            <Input variant='nome' placeholder='nome' 
            id="nome"
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            
            required/>
            </Estilização>
            <Estilização>
            <Input variant='senha' placeholder='senha'
            id="senha"
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            
            required />
            </Estilização>
            <Estilização>
            <Input variant='senha' placeholder='confirme sua senha'
            id="confirmSenha"
            type="password"
            name="confirmSenha"
            value={formData.confirmSenha}
            onChange={handleChange}
            
            required />
            </Estilização>
            <Estilização>
            <Input variant='email' placeholder='email'
             id="email"
             type="text"
             name="email"
             value={formData.email}
             onChange={handleChange}
             
             required/>
            </Estilização>
            <BotaoCadastro>
            <Button type='submit' colorScheme='gray' variant='outline' fontSize= '20px' color='white'>
                ENTRAR
            </Button>
            </BotaoCadastro>
         </CardCadastro>
         </form>
        </Fundo>
        </>
    )
} 

export default Cadastro