// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');

// cria os post no banco de dados

async function storePost(request, response) {
// Recuperar os dados enviados na requisição
// Preparar o comando de execução no banco
    const query = 'INSERT INTO perfil(user_id, img_perfil_) VALUES(?, ?);';
    console.log(request.body)
    const params = Array(
        request.body.user_id,
        request.file.filename,
        request.body.legenda_post
    )
    console.log(params)
    
    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        console.log('e ' + err)
        console.log('r ' + results)
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Postagem cadastrada com sucesso!.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a postagem. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível postar",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

async function posts(request, response) {
    const query = 'SELECT * FROM posts;';
    
    connection.query(query, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Dados de posts",
                    data: results
                });
        }
    })
}

// Função que atualiza o usuário no banco
async function updateUser(request, response) {
    // Preparar o comando de execução no banco
    const query = "UPDATE usuarios SET `nome` = ?, `senha` = ?, `fl_status` = ? WHERE `id` = ?";

    // Recuperar os dados enviados na requisição respectivamente
    const params = Array(
        request.body.nome,
        bcrypt.hashSync(request.body.senha, 10),
        request.body.fl_status,
        request.params.id  // Recebimento de parametro da rota
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso!`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a postagem!`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// Função que remove usuário no banco
async function deleteUser(request, response) {
    // Preparar o comando de execução no banco
    const query = "DELETE FROM usuarios WHERE `id` = ?";

    // Recebimento de parametro da rota
    const params = Array(
        request.params.id
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Usuário deletado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

module.exports = {
    storePost,
    updateUser,
    deleteUser,
    posts
}