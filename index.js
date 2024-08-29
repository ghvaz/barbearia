const express = require ("express")
const app = express()
const port =  8000

const cep_end = require("./middleware/cepEndereco.js")

app.use(express.json()) // um middleware global

app.use((req,res,prox)=>{
    console.log("middler 2")
    prox()
})


app.post("/barbearia", cep_end,
    (req, res)=>{
    console.log("POST BARBEARIA")
    res.json(req.body)
})

app.listen(port, ()=>{
    console.log("server roda na porta "+port)
})
