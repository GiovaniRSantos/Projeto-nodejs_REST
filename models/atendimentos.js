const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Atendimento {
    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD-MM-YYYY').format('YYYY-MM-DD HH:MM:SS')

        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteValido = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: dataValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteValido,
                mensagem: 'Cliente deve conter no minimo 5 caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        }
        else {
            const atendimentoDatado = { ...atendimento, dataCriacao, data }
            const sql = 'INSERT INTO Atendimentos SET ?'
            conexao.query(sql, atendimentoDatado, (err, resultados) => {
                if (err) {
                    res.status(400).json(err)
                }
                else {
                    res.status(201).json(resultados)
                }
            })
        }
    }

    lista(res){
        const sql = 'SELECT * FROM atendimentos'
        conexao.query(sql, (err, resultados) =>{
            if (err) {
                res.status(400).json(err)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Atendimento