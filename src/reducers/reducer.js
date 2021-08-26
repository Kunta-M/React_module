const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'GET_USERS':
      return {...state, users: action.payload}
    case 'GET_POSTS':
      return {...state, posts: action.payload}
    case 'GET_COMMENTS':
      return {...state, comments: action.payload}
    default :
      return {...state};
  }
}
export default reducer;