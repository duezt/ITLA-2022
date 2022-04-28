const express = require('express');
const app = express();

app.use(express.static(__dirname   +'assets'))

app.get("/mi-primer-html",function(req, res){
res.sendFile(__dirname + "/index.html")
})


app.listen(3000);
console.log("Express esta corriendo en el puerto: 3000");
console.log("htmp://localhost:3000");