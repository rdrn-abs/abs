import Game from './Game';
import VisitLater from './VisitLater';

const components = {
	data: Game,
	error: VisitLater,
};

const ScrambleGame = (context) => components[context.data.key](context);

export default ScrambleGame;
