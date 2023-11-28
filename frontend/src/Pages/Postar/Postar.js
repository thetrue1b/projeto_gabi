import React, { useState } from 'react';
import { Fundo } from './Postar.jsx';
import { Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { CardPostar } from './Postar.jsx';
import { CardP } from './Postar.jsx';
import { B } from './Postar.jsx';
import { Estilização } from './Postar.jsx';
import { Input } from '@chakra-ui/react';
import HeaderPo from '../../Componentes/HeaderPo/HeaderPo';
import { AddIcon } from '@chakra-ui/icons';
import Footer from '../Footer/Footer.js';
import { baseUrl } from '../../services/api.js';
import axios from 'axios';

function Postar(props) {
  const [legenda, setLegenda] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  // const handleClick = () => {
  //   const formData = {
  //     legenda: legenda,
  //   }
  
  //   axios.post(`${baseUrl}/posts/create`, formData)
  //   .then(function (response) {
  //     console.log(response)
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //   })
  // }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async(event) => {
    const content = event.target.files[0];
    setImage(content);
    const base64 = await convertToBase64(content);
    setSelectedFile(content);
    setFile(base64);
    console.log(content);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let formData = new FormData();

    formData.append('img_post', image)
    formData.append('legenda_post', legenda)
    formData.append('user_id', localStorage.getItem('user'))
    // const body = {
    //   img_post: file,
    //   legenda_post: legenda,
    //   user_id: localStorage.getItem('user')
    // }

    //console.log(body)
    const response = await axios.post(`${baseUrl}/post/create`, formData);
    
    if (response.data.success) {
      alert('Deu certo');
    } else {
      alert('Não deu');
    }
  }

  return (
    <>
      <HeaderPo />
      <Fundo>
        <CardPostar>

          <Text> Publicar Imagem</Text>

          <CardP>
            <label htmlFor="fileInput">
              <Button as="span" colorScheme="gray" leftIcon={<AddIcon />}>
                Carregar Imagem
              </Button>
            </label>
            <Input
              type="file"
              id="fileInput"
              display="none"
              onChange={handleFileUpload}
            />
          </CardP>

          {selectedFile && (
            <div>
              <B>
                <Text>Imagem Selecionada:</Text>
              </B>
              <img 
                onChange={(e) => setSelectedFile(e.target.value)}
                src={URL.createObjectURL(selectedFile)}
                alt="Imagem Selecionada"
                style={{ maxWidth: '100%' }}
              />
            </div>
          )}

          <B>
            <Text> Adicionar legenda</Text>
          </B>

          <Estilização>
            <CardP>
              <Input 
                value={legenda}
                onChange={(e) => setLegenda(e.target.value)} 
                variant="unstyled" 
                placeholder="Digite aqui" 
              />
            </CardP>
          </Estilização>
          <Button onClick={handleSubmit} colorScheme="gray">Salvar</Button>

        </CardPostar>
        <Footer />
      </Fundo>
    </>
  );
}

export default Postar;