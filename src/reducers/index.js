export default (state = { place: 'hoge' }, action) => {
  // eslint-disable-next-line no-console
  console.log('action', action);
  switch (action.type) {
    case 'CHANGE_PLACE':
      return Object.assign({}, state, { place: action.place });
    default:
      return state;
  }
};
