
const express = require('express')
const functions = require('./database.js');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send('Hello from Express');
});

server.get("/videogames", (req, res) => {
    console.log('This is the contents of the function:', functions.getVideoGames)
    res.send(functions.getVideoGames());
})

server.get("/videogames/:id", (req, res) => {

    const videoGameID = req.params.id;
    const videogame = functions.getVideoGamesById(videoGameID);

    if(videogame) {
        res.status(401).json(videogame);
    }
    else {
        res.status(404).json({
            message: "Videogame not found",
        })
    }

})

server.delete("/videogames/:id", (req, res) => {

    const videoGameID = req.params.id;
    const videogame = functions.getVideoGamesById(videoGameID);

    if (videogame) {
        functions.deleteVideoGame(videoGameID);
        res.status(401).send(functions.getVideoGames());
    }
    else {
       res.status(404).json({
           message: "videogame not found"
       })
    }
})

server.post("/videogames/", (req, res) => {

    if(!req.body.game) {
        return res.status(400).json({
            message: "Need a video game name", 
        })
    }

    const newGame = functions.createVideoGame({
        game: req.body.game,
    })
    
       res.status(201).json(newGame);

})

server.put("/videogames/:id", (req, res) => {

    const videoGameID = req.params.id;
    const videoGameBody = req.body;

    

    functions.updateVideoGame(videoGameID, videoGameBody);
    res.status(400).send(functions.getVideoGames());

})

server.listen(5000, () => 
   console.log('Server running on http://localhost:5000')
);
