export default function(state = null, action) {
  switch (action.type) {
    case 'POST_MESSAGE':
      return action.payload;
    default:
      return state;
  }
}
