var servidor = require('express');
var bodyParser = require('body-parser');
var rotas = require("./routes/rota");
var cors = require('cors');



var app = servidor();
app.use(cors());

app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json());

app.use('/', rotas);

app.listen(3000, ()=>{
    console.log("Servidor API rodando na porta localhost:3000")
})