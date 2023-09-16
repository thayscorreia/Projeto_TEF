

exports.obterFormaPagamento = async function(req, res, next){
    try {
        const formaPagamento = [
            {
                opcao: 1,
                formaPagto: 'À vista diheiro/cheque',
                desconto: 10
            },
            {
                opcao: 2,
                formaPagto: 'À vista cartão',
                desconto: 5
            },
            {
                opcao: 3,
                formaPagto: '2x no cartão',
                desconto: 0
            },
            {
                opcao: 4,
                formaPagto: '3x ou mais no cartão',
                desconto: 0
            },
        ]

        res.send(200, formaPagamento)
    } catch (error) {
        throw(error)
    }
}

exports.gravarPagamento = async function(req, res, next){
    try {
        
    } catch (error) {
        throw(error)
    }
}