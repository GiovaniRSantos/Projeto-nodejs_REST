const conexao = require('./conexao')

const executaQuery = (query, params = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, params, (err, resultados, campos) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(resultados)
            }
        })
    })

}

module.exports = executaQuery