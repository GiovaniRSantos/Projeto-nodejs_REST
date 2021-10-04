const query = require('../infraestrutura/dataBase/queries')


class Atendimento {
    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'
        return query(sql, atendimento)
    }

    lista(){
        const sql = 'SELECT * FROM atendimentos'
        return query(sql)
    }
}

module.exports = new Atendimento()