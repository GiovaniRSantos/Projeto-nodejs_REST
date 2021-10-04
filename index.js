const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/dataBase/conexao')
const Tabelas = require('./infraestrutura/dataBase/tabelas') 

conexao.connect(er => {
    if (er) {
        console.log(er)
    }
    else {
        console.log('conectado')
        Tabelas.init(conexao)
        
        const app = customExpress()

        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})


