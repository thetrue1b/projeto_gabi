import { IconButton } from '@chakra-ui/react'
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
import ana from '../../assets/ANA.png'





function Inicial() {
    return (
        <>
            <Container>
                <Header />
                <Fundo>
                    <CardInicial>
                        <Card maxW='md'>
                            <CardHeader>
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar name='GM' src={gabi} />

                                        <Box>
                                            <Heading size='sm'>Gabriela Munari</Heading>
                                            <Text>Senac, São Leopoldo</Text>
                                        </Box>
                                    </Flex>
                                    <IconButton
                                        variant='ghost'
                                        colorScheme='gray'
                                        aria-label='See menu'
                                    />
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <Text>
                                    Olha essa receita sem glúten, gostou?
                                </Text>
                            </CardBody>
                            <Image
                                objectFit='cover'
                                src='https://www.lactosenao.com/wp-content/uploads/2017/04/brownie-de-inhame-sem-gluten-e-lactose.png'
                                alt='Chakra UI'
                            />

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
                                    <Button flex='1' variant='ghost' >
                                        <Like/> Like
                                    </Button>
                                    <Button flex='1' variant='ghost' leftIcon={<ArrowDownIcon />}>
                                        Salvar
                                    </Button>
                                </EstilizaçãoB>



                            </CardFooter>
                        </Card>
                    </CardInicial>
                    <CardInicial>
                        <Card maxW='md'>
                            <CardHeader>
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar name='Ana Carolina Bitello' src={ana}/>

                                        <Box>
                                            <Heading size='sm'>Ana Carolina Bitello</Heading>
                                            <Text>Senac, São Leopoldo</Text>
                                        </Box>
                                    </Flex>
                                    <IconButton
                                        variant='ghost'
                                        colorScheme='gray'
                                        aria-label='See menu'
                                    />
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <Text>
                                    Olha essa receita sem glúten, gostou?
                                </Text>
                            </CardBody>
                            <Image
                                objectFit='cover'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5tS0iRh14PMGLa0PyPS6b_Ghivbpv6JDIqA8vc3Oru1WdWHWvbLtvXrjYdJuFVIl4i0&usqp=CAU'
                                alt='Chakra UI'
                            />

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
                                    <Button flex='1' variant='ghost' >
                                    <Like/> Like
                                    </Button>
                                    <Button flex='1' variant='ghost' leftIcon={<ArrowDownIcon />}>
                                        Salvar
                                    </Button>
                                </EstilizaçãoB>

                            </CardFooter>
                        </Card>
                    </CardInicial>
                    <CardInicial>
                        <Card maxW='md'>
                            <CardHeader>
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar name='EB' src='https://media.licdn.com/dms/image/D4D03AQHU_y69sIyfYg/profile-displayphoto-shrink_800_800/0/1687105589340?e=2147483647&v=beta&t=Xkeg3Hi2ICkawn4-N8xdXsaqA9_7QBMZvF0eFfnnw0I' />

                                        <Box>
                                            <Heading size='sm'>Enzo Bitencourt</Heading>
                                            <Text>Senac, São Leopoldo</Text>
                                        </Box>
                                    </Flex>
                                    <IconButton
                                        variant='ghost'
                                        colorScheme='gray'
                                        aria-label='See menu'
                                    />
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <Text>
                                    Olha essa receita sem glúten, gostou?
                                </Text>
                            </CardBody>
                            <Image
                                objectFit='cover'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5tS0iRh14PMGLa0PyPS6b_Ghivbpv6JDIqA8vc3Oru1WdWHWvbLtvXrjYdJuFVIl4i0&usqp=CAU'
                                alt='Chakra UI'
                            />

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
                                    <Button flex='1' variant='ghost' >
                                    <Like/> Like
                                    </Button>
                                    <Button flex='1' variant='ghost' leftIcon={<ArrowDownIcon />}>
                                        Salvar
                                    </Button>
                                </EstilizaçãoB>

                            </CardFooter>

                        </Card>

                    </CardInicial>
                    <CardInicial>
                        <Card maxW='md'>
                            <CardHeader>
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar name='BD' src='https://media.licdn.com/dms/image/D4D03AQHvMvXpBAfMWg/profile-displayphoto-shrink_800_800/0/1687564049662?e=2147483647&v=beta&t=0XgL-hyw93ouQjZQ4nVx58YLW4fs_hvXwyXZRvaO84s' />

                                        <Box>
                                            <Heading size='sm'>Bárbara Dapper</Heading>
                                            <Text>Senac, São Leopoldo</Text>
                                        </Box>
                                    </Flex>
                                    <IconButton
                                        variant='ghost'
                                        colorScheme='gray'
                                        aria-label='See menu'
                                    />
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <Text>
                                    Olha essa receita sem glúten, gostou?
                                </Text>
                            </CardBody>
                            <Image
                                objectFit='cover'
                                src='https://www.lactosenao.com/wp-content/uploads/2017/04/brownie-de-inhame-sem-gluten-e-lactose.png'
                                alt='Chakra UI'
                            />

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
                                    <Button flex='1' variant='ghost' >
                                    <Like/> Like
                                    </Button>
                                    <Button flex='1' variant='ghost' leftIcon={<ArrowDownIcon />}>
                                        Salvar
                                    </Button>
                                </EstilizaçãoB>
                            </CardFooter>


                        </Card>
                    </CardInicial>

                </Fundo>
                <Footer/>
            
         </Container>
            
        </>
    )
}

export default Inicial