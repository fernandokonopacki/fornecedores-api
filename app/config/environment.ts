export const Enviroment = {

    //database
    bd_database: process.env.bd_database || "apifornecedores",
    bd_usuario: process.env.bd_usuario || "root",
    bd_senha: process.env.bd_senha || "123456",
    bd_host: process.env.bd_host || "localhost",
    bd_port: parseInt(process.env.bd_port) || 3306
}