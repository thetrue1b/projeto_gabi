/**
 INFORMAÇÕES DO ROUTER

 Uma rota em uma API é um “caminho” que será “chamado” por uma aplicação ou cliente e responderá alguma informação. Cada rota pode ter uma ou mais funções, e ela deve ser única na API com o seu método HTTP definido, ao receber uma chamada ela faz todo o processamento necessário para retornar os dados que foi solicitado
*/

// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
const upload = require('../config/multer');

// Importar as funções (processamento da requisição) do controller
const { 
    listUsers,
    storeUser,
   /* storePost,*/
    updateUser,
    deleteUser
} = require('../controllers/usersController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.get('/users', listUsers);
router.get('/users', listUsers);


// tras a informação, como um select 
router.post('/user/create', storeUser);

//cadastra post
//router.post('/post/create', storePost);

//para levar a informação é post
router.put('/user/:id', upload.single('image'), updateUser);

// altera a informação
router.delete('/user/:id', deleteUser);
//deleta a informação

module.exports = router;