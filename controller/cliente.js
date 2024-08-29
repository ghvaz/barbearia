let db = []
let nextID = 1
const cliente = {
    model: (body, id = nextID++)=>{
        if( body.nome != undefined && body.nome != "" &&
            body.fone != undefined && body.fone != "" &&
            body.email != undefined && body.email != "" &&
            body.senha != undefined && body.nome != ""
        ){
            return {id, nome: body.nome, fone:body.fone, email:body.email, senha:body.senha}
        }else{
            return undefined
        }
    },

    store: (body) =>{
        let novo = cliente.model(body)
        if(novo){
            db.push(novo)
            
            return 201;
        }else{ return 400 }
    },

    showAll: () => { return db },

    show: (id) => {
        let index = db.findIndex(el => el.id == id)

        if(index != (-1)){
            db[index]
            return 200
        }else{
            return 418;
        }
    },
    destroy: (id) =>{
        let index = db.findIndex(el => el.id == id)

        if(index != (-1)){
            db.splice(index,1)
            return 200
        }else{
            return 418
        }
    },

    uptade:()=>{}
}