const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Esta on")
})

let listaDePedidos = [
    {
        "id":1,
        "cliente" : "Guto",
        "id_cliente":100,
        "produto": "X-bacon",
        "valor": 29.9
    },

    {
        "id":2,
        "cliente" : "Guto",
        "id_cliente":100,
        "produto": "X-salada",
        "valor": 25.9
    },

    {
        "id":3,
        "cliente" : "Keila",
        "id_cliente":"85",
        "produto": "X-fominha",
        "valor": 39.9
    }
    


]

//Listar
app.get("/listarpedidos", function(req, res){
    res.send(listaDePedidos)
})

//listar um
app.get("/listarumpedido/:id",function(req, res) {
    let idinformado = req.params.id
    if(idinformado > listaDePedidos.length){
        res.send("pedido Invalido")
    }else{
        res.send(listaDePedidos [idinformado-1])
    }
   

    
})

app.listen(3000)