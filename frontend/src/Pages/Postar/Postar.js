import React, { useState } from 'react';
import { Fundo } from './Postar.jsx';
import { Text } from '@chakra-ui/react';
import { Button, Stack } from '@chakra-ui/react';
import { CardPostar } from './Postar.jsx';
import { CardP } from './Postar.jsx';
import { B } from './Postar.jsx';
import { Estilização } from './Postar.jsx';
import { Input } from '@chakra-ui/react';
import HeaderPo from '../../Componentes/HeaderPo/HeaderPo';
import { AddIcon } from '@chakra-ui/icons';
import Footer from '../Footer/Footer.js';

function Postar() {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileUpload(event) {
    const file = event.target.files[0];
    setSelectedFile(file);
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
              <Input variant="unstyled" placeholder="Digite aqui" />
            </CardP>
          </Estilização>
        </CardPostar>
        <Footer />
      </Fundo>
    </>
  );
}

export default Postar;