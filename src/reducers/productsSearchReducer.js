export const searchProductsByKeyword = (state = '', action) => {
  switch (action.type) {
    case 'ADD_KEYWORD':
        return action.data
      break;
    default:
      return state
  }
}
