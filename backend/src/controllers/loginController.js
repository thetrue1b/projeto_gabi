// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();
// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');
// Importar pacote que implementa o protocolo JSON Web Token
const jwt = require('jsonwebtoken');
 
// Authentication
async function login(request, response) {
    // Preparar o comando de execução no banco
    const query = "SELECT * FROM usuarios WHERE `email` = ?";
   
    // Recuperar credenciais informadas
    const params = Array(
        request.body.email
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {            
            if (results.length > 0) {                
                bcrypt.compare(request.body.senha, results[0].senha, (err, result) => {
                    if (err) {                        
                        return response.status(401).send({
                            msg: 'Email or password is incorrect!'
                        });
                    } else if(result) {
                        const id = results[0].id;
                        const token = jwt.sign({ userId: id },'the-super-strong-secrect',{ expiresIn: 300 });
                        results[0]['token'] = token;
                       
                        response
                        .status(200)
                        .json({
                            success: true,
                            message: `Sucesso! Usuário conectado.`,
                            data: results
                            //me retorna o token que esta no results, pra locar no meu localstorage (esse
                            // localstorage está no frontend de login)
                            //também vai precisar do ID que está no resultus  
                            // Precisamo fazer isso, pq depois que entrarmos na plataforma precisaremos puxar os dados desse usuário
                            // ex: o nome para postar as coisas, tudo seirão do localstorage
                        });
                    } else {
                        // Senha incorreta
                        response.status(401).send({
                            msg: 'Email ou senha incorretos!'
                        });
                    }
                })
               
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível logar o usuário!",
                    query: err,
                    sqlMessage: err
                });
        }
    });
}
 
 
module.exports = {
    login
}