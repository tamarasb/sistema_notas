import banco from "../config/banco.js"

const Aluno = banco.sequelize.define("alunos",{
    id:{
        type: banco.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: banco.Sequelize.STRING(50)
    },
    telefone:{
        type: banco.Sequelize.STRING(20)
    },
    email:{
        type: banco.Sequelize.STRING(50)
    },
    nota:{
        type: banco.Sequelize.INTEGER
    },
    situacao:{
        type: banco.Sequelize.INTEGER
    }
})

Aluno.sync()

export default Aluno