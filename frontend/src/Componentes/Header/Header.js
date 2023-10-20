import React from "react"
import { HeaderContainer } from "./Header.jsx"
// import { HeaderContainer } from "./Header.jsx"
import { SearchIcon } from '@chakra-ui/icons'
import { IconButton } from "@chakra-ui/button"
import { Flex, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react'


function Header() {
    return (
        <>

            {/* <Estilização>
                    <MesmaLinha>
                        <Input placeholder='Pesquisar' size='sm' />
                        <IconButton aria-label='Search database' icon={<SearchIcon />} />
                    </MesmaLinha>
                </Estilização> */}

            <HeaderContainer>
                <Flex>
                    <Stack spacing={4} w='90vw'>
                        <InputGroup 
            
                            focusBorderColor='lime'
                            alignItems='center'>
                            <InputLeftElement
                                pointerEvents='none'                            >
                                <IconButton aria-label='Search database' icon={<SearchIcon />} />
                            </InputLeftElement>
                            <Input type='tel' _placeholder={{ color: 'White' }} placeholder=' Pesquisar' />
                        </InputGroup>
                    </Stack>
                </Flex>
            </HeaderContainer>




        </>
    )
}

export default Header