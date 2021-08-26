const reducer = (state, action) => {
    if (action.obj === '1' && action.type === 'increment') {
        return {...state, a: state.a++}
    } else if (action.obj === '1' && action.type === 'decrement') {
        return {...state, a: state.a--}
    } else if (action.obj === '2' && action.type === 'increment') {
        return {...state, b: state.b+5}
    } else if (action.obj === '2' && action.type === 'decrement') {
        return {...state, b: state.b-5}
    } else if (action.obj === '3' && action.type === 'increment') {
        return {...state, c: state.c + 10}
    } else if (action.obj === '3' && action.type === 'decrement') {
        return {...state, c: state.c-10}
    }
    return {...state};
}

export default reducer;