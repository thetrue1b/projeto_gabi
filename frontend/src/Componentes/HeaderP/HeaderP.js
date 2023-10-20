import React, { useState } from "react";
import { E, S } from "./HeaderP.jsx";
import { HeaderContainer } from "./HeaderP.jsx";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import ImgA from "../../assets/GABRIE.png"
import { Link } from "react-router-dom";

function HeaderP() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [avatarImage, setAvatarImage] = useState(ImgA);

  const onDrop = (acceptedFiles) => {
    // Verifica se foi selecionado pelo menos um arquivo
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      // Faça algo com o arquivo carregue-o no Avatar
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Aceita apenas arquivos de imagem
    multiple: false, // Permite apenas um arquivo por vez
  });

  return (
    <>
      <HeaderContainer>
        <E>
          <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
            ☰
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Editar perfil</DrawerHeader>
              <S>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Avatar size="xl" name="Gabriela Munari" src={avatarImage} />
                  
                </div>
            
              </S>
              <DrawerBody>
                <Input placeholder="▷ Editar nome..." />
                <Input placeholder="▷ Editar localização..." />
                <Input placeholder="▷ Editar BIO..." />
              
              </DrawerBody>
              <Button colorScheme="gray">
                <Link to="/Salvos"> Salvos
                </Link>
                </Button>
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme="blue">Salvar</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </E>
      </HeaderContainer>
    </>
  );
}

export default HeaderP;