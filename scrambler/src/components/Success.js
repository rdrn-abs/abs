import { keys } from '@laufire/utils/collection';
import Discount from './Discount';
import Retry from './Retry';

const components = {
	data: Discount,
	error: Retry,
};

const Success = (context) => {
	const { state: { discount }} = context;
	const [first] = keys(discount);

	return components[first](context);
};

export default Success;
