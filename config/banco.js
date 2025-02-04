import { Sequelize } from "sequelize";

const BANCO = 'sistema-notas'
const USER = 'root'
const SENHA = ''
const HOST = 'localhost'

const sequelize = new Sequelize({
    database: BANCO,
    username: USER,
    password: SENHA,
    host: HOST,
    dialect: "mysql"
})

sequelize.authenticate().then(()=>{
    console.log("Conexao feita com sucesso!")
})

export default {Sequelize,sequelize}