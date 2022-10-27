import "reflect-metadata"
import { DataSource } from "typeorm"
import { Enviroment } from "../config/environment"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: Enviroment.bd_host,
    port: Enviroment.bd_port,
    username: Enviroment.bd_usuario,
    password: Enviroment.bd_senha,
    database: Enviroment.bd_database,
    synchronize: true,
    logging: false,
    entities: [__dirname + "/../db/entity/**.entity.js"],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {
        console.log("[Server]: Tables Create");
    })
    .catch((error) => console.log(error))