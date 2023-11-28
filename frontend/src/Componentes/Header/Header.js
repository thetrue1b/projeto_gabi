import React from "react"
import { HeaderContainer } from "./Header.jsx"
// import { HeaderContainer } from "./Header.jsx"
import { SearchIcon } from '@chakra-ui/icons'
import { IconButton } from "@chakra-ui/button"
import { Flex, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { useState } from "react"





function Header() {
    // const [filtroBuscaPorNome, setFiltroBuscaPorNome] = useState("");
    // const filtroDeUsuario = ()=>{
    //     const usuarioFiltrados = 
    //     .filter((item)=>{
    //       return item.name.includes(filtroBuscaPorNome)
    //     })
    //     return usuarioFiltrados;
    //   }
  
    //   const filtrados = filtroDeUsuario();
     
    return (
        <>

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
                            <Input type='tel' _placeholder={{ color: 'White' }} placeholder=' Pesquisa' />
                        </InputGroup>
                    </Stack>
                </Flex>
            </HeaderContainer>




        </>
    )
}

export default Header