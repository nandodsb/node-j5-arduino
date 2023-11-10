import { Board, Boards, Led } from 'johnny-five';

// @ts-check
const boards = new Boards(['A']);

boards.on('ready', () => {
	const led = new Led({
		board: boards.byId('A'),
		pin: 13
	});

	led.strobe();

	// boards.on('exit', () => {
	// 	led.off();
	// });
});
