import { Card, CardHeader, CardBody, CardFooter, Text, Image, Flex, Avatar, Box, Heading} from '@chakra-ui/react'
import { Container, Fundo, CardInicial } from './MinhaP.jsx'
import { IconButton } from '@chakra-ui/react'
import bolo from "../../assets/bolomilho.jpg"
import gabi from "../../assets/GABRIE.png"
import Footer from '../Footer/Footer.js'



function MinhaP() {
    return (
        <>
            <Container>

                <Fundo>
                    <CardInicial>
                        <Card maxW='md'>
                            <CardHeader>
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar name='GM' src={gabi}/>

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
                                src={bolo}
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




                            </CardFooter>
                        </Card>
                    </CardInicial>
                    <Footer/>
                    

                </Fundo>

            </Container>
        </>
    )
}

export default MinhaP