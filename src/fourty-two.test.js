const FourtyTwo = require('./fourty-two');

function makePlayer(id) {
	return {
		id: id
	}
}

test('new game has players', () => {
	game  = FourtyTwo.createGame(makePlayer(1), makePlayer(2), makePlayer(3), makePlayer(4));
  	expect(game.player1.id).toBe(1);
  	expect(game.player2.id).toBe(2);
  	expect(game.player3.id).toBe(3);
  	expect(game.player4.id).toBe(4);
});