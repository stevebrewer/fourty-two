const FourtyTwo =  {

	games: [],
	users: [],

	addUser: (user) => {
		users.push(user)
	} ,

	createGame: (player1, player2, player3, player4) => {
		const game = {
			player1: player1,
			player2: player2,
			player3: player3,
			player4: player4
		}

		// shuggle the dominoes and give them to the players

		// this.games.push(game)

		return game
	}
}
module.exports = FourtyTwo;