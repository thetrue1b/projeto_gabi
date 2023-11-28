import { Center, IconButton } from '@chakra-ui/react'
import { Fundo } from './Inicial.jsx'
import { CardInicial } from './Inicial.jsx'
import { Card, CardHeader, CardBody, CardFooter, Text, Image, Flex, Avatar, Box, Heading, Button } from '@chakra-ui/react'
import Header from '../../Componentes/Header/Header'
import { Container } from './Inicial.jsx'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { EstilizaçãoB } from './Inicial.jsx'
import Footer from '../Footer/Footer.js'
import Like from '../../Componentes/Like/Like.js'
import gabi from '../../assets/GABRIE.png'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../services/api.js'
import { S } from './Inicial.jsx'


function Inicial() {

    // const id = localStorage.getItem("user")
    // const formData = {
    //     id: id
    // }

    // const [user, setUser] = useState()

    // useEffect(() => {
    //     axios.post(`${baseUrl}/find/findUser`, formData)
    //         .then(function (response) {
    //             setUser(response.data.data)
    //         })
    //         .catch(function (error) {
    //             alert(error.response.data.msg)
    //         });
    // })

    const [posts, setPosts] = useState([]);
    const images = 'http://localhost:3008/uploads/';

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3008/api/posts');
            console.log(response.data.data);
            setPosts(response.data.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const imagens = 'http://localhost:3008/uploads/';
    const [user, setUser] = useState([])


    return (
        <>
        {user ? (
                <Container>
                    <Header />
                    <Fundo>
                        {posts.map((post) => (
                            <CardInicial key={post.id}>
                                <Card maxW='md'>
                                    <CardHeader>
                                        <Flex spacing='4'>
                                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>

                                                <Avatar name='GM'  src={gabi} />
                                                <Box>
                                                    <Heading size='sm'>{post.email}</Heading>
                                                    <Text>{post.nome}</Text>
                                                </Box>
                                            </Flex>
                                            <IconButton variant='ghost' colorScheme='gray' aria-label='See menu' />
                                        </Flex>
                                    </CardHeader>

                                    <CardBody>
                                        <Text>
                                            {post.legenda_post}
                                        </Text>
                                    </CardBody>

                                    {post.img_post && (
                                        <Image
                                            objectFit='cover'
                                            // src={URL.createObjectURL(new Blob([post.img_post.data], { type: 'image/jpeg' }))}
                                            src={images + post.img_post}
                                            height={80}
                                            width={80}
                                            alt='A imagem não carregou'
                                            style={{ display: 'block', margin: 'auto' }}
                                            onError={(e) => {
                                                console.error('Erro ao carregar imagem:', e);
                                                console.log('URL da imagem:', post.img_post); // Adiciona esta linha para obter mais informações sobre a URL da imagem
                                            }}
                                        />
                                    )}

                                    <CardFooter
                                        justify='space-between'
                                        flexWrap='wrap'
                                        sx={{
                                            '& > button': {
                                                minW: '136px',
                                            },
                                        }}
                                    >
                                        <EstilizaçãoB>
                                            <Button flex='1' variant='ghost'>
                                                <Like /> Like
                                            </Button>
                                            <Button flex='1' variant='ghost' leftIcon={<ArrowDownIcon />}>
                                                Salvar
                                            </Button>
                                        </EstilizaçãoB>
                                    </CardFooter>
                                </Card>
                            </CardInicial>
                        ))}
                    </Fundo>
                    <Footer />
                </Container>
             ) : (
                <></>
            )} 
        </>
    );
}

export default Inicial;

