import Discount from './Discount';
import Retry from './Retry';

const comp = {
	data: Discount,
	error: Retry,
};

const Success = (context) => {
	const { state: { discount: { data }}} = context;

	return comp[Object.keys(data)[0]](context);
};

export default Success;
