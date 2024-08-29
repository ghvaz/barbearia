const axios = require('axios')

const cep_end = (rq, rs, nxt)=>{
    if (rq.body.cep != undefined &&
        rq.body.cep.length == 8 &&
        !isNaN(Number(rq.body.cep))
    ){
        axios.get(`https://viacep.com.br/ws/${rq.body.cep}/json/`).then((resposta)=>{
            rq.body.endereco = resposta.data
            delete rq.body.cep
            nxt()
        })
        
    }else{
        rs.status(418).json()
    }
}
module.exports = cep_end
