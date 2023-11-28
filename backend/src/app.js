// Módulo de configuração da webapi, módulo de aplicação
// Importar o pacote express (servidor)
const express = require('express');
// Responsável por lidar com requisições externas
const cors = require('cors');
// Importar as rotas para serem executadas na aplicação
const userRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const postRouter = require('./routes/postRouter');
const findRouter = require('./routes/findUserRouter');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();

// Habilitar o recebimento de requests em formato JSON
app.use(express.json());
// Habilitar o recebimento de requests em formato JSON
app.use(cors())
// Habilitar as rotas na aplicação
app.use('/api', userRouter);
app.use('/uploads', express.static(__dirname + '\\public'));
app.use('/api/auth', loginRouter);
app.use('/api', postRouter);
app.use('/api/find', findRouter)
// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 1903);

module.exports = app;
 