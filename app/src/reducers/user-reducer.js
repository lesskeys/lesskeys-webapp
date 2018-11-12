const initialState = {
  user: null,
}

const userReducer = ( state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER': 
      return {
        user: action.user,
      }
    case 'REMOVE_USER': 
      return {
        user: action.user,
      }
    default:
      return state
  }
}

export default userReducer