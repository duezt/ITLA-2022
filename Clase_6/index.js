const  express = require('express');

const app = express();

app.use(express.static('assets'));



app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.get('/formulario', function(req,res)  {
    res.sendFile(__dirname + '/form.html');
});

app.get('/ejercicio', function (req,res) {
    res.sendFile(__dirname + "/ejercicio.html");
    
})

app.listen(3000)