const conexao = require('../infraestrutura/conexao')
const uploadArquivo = require('../arquivos/uploadArquivos')

class Pet {
    adiciona(pet, res) {
        const query = 'INSERT INTO Pets SET ?'

        uploadArquivo(pet.imagem, pet.nome, novoCaminho => {
            const novoPet = { nome: pet.nome, imagem: novoCaminho }

            conexao.query(query, novoPet, err => {
                if (err) {
                    console.log(err)
                    res.status(400).json(err)
                }
                else {
                    res.status(200).json(pet)
                }
            })
        })
    }
}

module.exports = new Pet()