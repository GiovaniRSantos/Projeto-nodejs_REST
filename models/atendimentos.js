const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'
        conexao.query(sql, atendimento, (err, resultados) => {
            if (err) {
                console.log(err)
            }            
            else{
                console.log(resultados)
            }
        })
    }
}

module.exports = new Atendimento