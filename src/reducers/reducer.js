const reducer = (state, action) => {
  if (action.obj === '1' && action.action === '+') {
    return {...state, value: state.value+10}
  } else if (action.obj === '1' && action.action === '-') {
    return {...state, value: state.value-2}
  }

  return {...state};
}

export default reducer;