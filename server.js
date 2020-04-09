const express = require('express')
const functions = require('./database.js');

const server = express();

server.get("/", (req, res) => {
    res.send('Hello from Express');
});

server.get("/videogames", (req, res) => {
    console.log('This is the contents of the function:', functions.getVideoGames)
    res.send(functions.getVideoGames());
})

server.get("/videogames/:id", (req, res) => {
    res.send(functions.getVideoGamesById())
})

server.delete("/deletevideogames", (req, res) => {
    res.send(functions.deleteVideoGame());
})

server.post("/addvideogames", (req, res) => {
    res.send(functions.createVideoGame());
})

server.put("/updatevideogmaes", (req, res) => {
    res.send(functions.updateVideoGame())
})

//server.post
//server.delete
///server.put

server.listen(5000, () => 
   console.log('Server running on http://localhost:5000')
);



