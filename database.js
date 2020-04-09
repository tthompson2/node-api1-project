let videogames = [
	{ id: "1", game: "DraculaX" },
	{ id: "2", game: "Kid Icarus " },
	{ id: "3", game: "Daimakamura" },
]

function getVideoGames() {
	return videogames;
}

function getVideoGamesById(id) {
	return videogames.find(vg => vg.id === id); // simple find function that will match the paramter id with the first occurence of the 
}

function createVideoGame(data) {
	const payload = {
		id: String(videogames.length + 1),
		...data,
	}

	videogames.push(payload);
	return payload;
}

function updateVideoGame(id, data) {
	const index = videogames.findIndex(vg => vg.id === id);
	videogames[index] = {
		...videogames[index],
		...data,
	}
	
	return videogames[index];
}

function deleteVideoGame(id) {
	users = users.filter(u => u.id != id)
}

module.exports = {
	getVideoGames,
	getVideoGamesById,
	createVideoGame,
	updateVideoGame,
	deleteVideoGame,
}