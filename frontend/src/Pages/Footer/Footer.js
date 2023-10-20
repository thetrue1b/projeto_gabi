import { MenuContainer } from "./Footer.jsx";
import { Tabs, TabList, Tab } from '@chakra-ui/react'
import Add from "../../assets/add.png"
import H from "../../assets/home.png"
import P from "../../assets/pessoa.png"
import { NormalIcon } from "./Footer.jsx";
import { useNavigate } from "react-router-dom";
import sair from "../../assets/sair.png"

function Footer() {
    const navigate = useNavigate()

 

    const goToInicial = () => {
        navigate('/inicial')

    }

    const goToPerfil = () => {
        navigate('/perfil')

    }

    const goToPostar= () => {
        navigate('/postar')

    }

    const goToSair= () => {
        navigate('/home')

    }




    
    return (
        <>
            <MenuContainer>
                <Tabs variant='soft-rounded' colorScheme='gray'>
                    <TabList w='88vw' justifyContent='space-between'>

                        <Tab>
                            <NormalIcon src={Add} onClick={goToPostar} />
                        </Tab>

                        <Tab>
                            <NormalIcon onClick={goToInicial} src={H} />
                        </Tab>

                        <Tab>
                            <NormalIcon src={P} onClick={goToPerfil} />
                        </Tab>
                        <Tab>
                            <NormalIcon src={sair} onClick={goToSair} />
                        </Tab>
                    </TabList>
                </Tabs>
            </MenuContainer>
        </>
    );
    }

export default Footer;