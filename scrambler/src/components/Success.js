import { keys } from '@laufire/utils/collection';
import Discount from './Discount';
import Retry from './Retry';

const comp = {
	data: Discount,
	error: Retry,
};

const Success = (context) => {
	const { state: { discount: { data }}} = context;
	const [first] = keys(data);

	return comp[first](context);
};

export default Success;
