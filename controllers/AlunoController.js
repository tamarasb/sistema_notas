import Aluno from "../models/Aluno";

class AlunoController{
    index = async (req,res)=>{
        const alunos = await Aluno.findAll()
        res.render("aluno/index")
    }

    cadastrar = (req,res)=>{
        res.render("aluno/cadastrar")
    }

    salvar = (req, res)=>{
        const situacao = 0//1 = aprovado, 0 = reprovado
        if (res.body.nota >= 7) {
            situacao = 1
        }
         
        let aluno = {
            nome: res.body.nome,
            email: res.body.email,
            nota: res.body.nota,
            situacao: situacao
        }

        Aluno.create(aluno).then(()=>{
            res.redirect("/aluno")
        })
    }
}

export default new AlunoController()