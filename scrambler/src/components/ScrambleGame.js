import Game from './Game';
import VisitLater from './VisitLater';

const comp = {
	data: Game,
	error: VisitLater,
};

const ScrambleGame = (context) => comp[context.data.key](context);

export default ScrambleGame;
