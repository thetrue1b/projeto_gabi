import { Fundo } from './Home.jsx'
import { Imagem } from './Home.jsx'
import ImgLogo from '../../assets/logo.png'
import { BotaoHome } from './Home.jsx'
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Estilo } from './Home.jsx'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <>
            <Fundo>
                <Imagem src={ImgLogo} />
                <Estilo>
                    <Text> Você já teve dificuldade em encontrar receitas sem glúten? Imagine ter um mundo de sabores ao seu alcance, tudo na palma da sua mão. É por isso que o MO foi projetado, para transformar sua jornada culinária em uma expêriencia emocionante e saborosa!</Text>
                </Estilo>
                <BotaoHome>
                    <Button colorScheme='gray' variant='outline' fontSize='20px' color='white'>
                        <Link to='/Login'>
                            COMEÇAR
                        </Link>
                    </Button>
                </BotaoHome>
            </Fundo>
        </>
    )
}

export default Home