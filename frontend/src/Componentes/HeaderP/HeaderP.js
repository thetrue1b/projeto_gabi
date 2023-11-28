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
  FormErrorMessage,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import ImgA from "../../assets/GABRIE.png"
import { Link } from "react-router-dom";
import axios from "axios";

function HeaderP({userData}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [avatarImage, setAvatarImage] = useState(ImgA);
  const [image, setImage] = useState();
  const [nome, setNome] = useState("");
  
  const onDrop = (acceptedFiles) => {
    // Verifica se foi selecionado pelo menos um arquivo
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setImage(file);
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

  const handleSubmit = async () => {
    const nomeUsuario = nome === "" ? userData.nome : nome;

    let formData = new FormData();

    formData.append('nome', nomeUsuario)
    formData.append('image', image)
      
    const response = await axios.put('http://localhost:3008/api/user/' + userData.id, formData);

    if (response.data.success) {
      alert('Sucesso!')
    } else {
      alert("Sem sucesso");
    }
  }
  const imagens = 'http://localhost:3008/uploads/';
  const [user, setUser] = useState([])

  return (
    <>
    {user ? (
      <HeaderContainer userData={user}>
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
                  <input
                   {...getInputProps()} 
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <Avatar 
                    size="xl" 
                    name="Gabriela Munari" 
                    src={imagens + user.imagem}
                  />                  
                </div>
            
              </S>
              <DrawerBody>
                
                <Input 
                  placeholder="▷ Editar nome..." 
                  defaultValue={userData.nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              
              </DrawerBody>
              <Button colorScheme="gray">
                <Link to="/Salvos"> Salvos
                </Link>
                </Button>
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme="blue" onClick={handleSubmit}>Salvar</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </E>
      </HeaderContainer>
     ) : (
      <></>
  )}
    </>
  );
}

export default HeaderP;