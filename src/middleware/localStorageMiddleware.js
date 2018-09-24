export default ({ getState }) => next => (action) => {
	const result = next(action);

	switch (action.type) {
		case 'TODO_ADD':
		case 'TODO_TOGGLE':
		case 'TODO_REMOVE':
		case 'TODO_TOGGLE_ALL':
		case 'TODO_CLEAR_COMPLETED':
			localStorage.setItem('todos', JSON.stringify(getState().get('todos')));

			return result;

		case 'VISIBILITY_ALL':
		case 'VISIBILITY_ACTIVE':
		case 'VISIBILITY_COMPLETED':
			localStorage.setItem('visibilityFilter', JSON.stringify(getState().get('visibilityFilter')));

			return result;
		default:
			return result;
	}
};
