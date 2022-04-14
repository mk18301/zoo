const express = require ('express'); 

const app = express(); 

const PORT = 3000; 

app.use(express.static('data')); 

app.use(express.static(__dirname + 'data/index.css')); 

app.use(express.static(__dirname + 'data/script.js')); 

app.use(express.static(__dirname + 'data/zo0.jpg')); 

 
 

app.get('', (req, res) =>{ 

    res.sendFile(__dirname +'/data/index.html') 

}); 

 
 
 

app.listen(PORT, () => { 

    console.info(`Your server is running on ${PORT}`); 

}); 

 