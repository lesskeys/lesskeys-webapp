const userListReducer = ( state = { userList: null }, action) => {
  switch (action.type) {
    case 'GET_USER_LIST': 
      return {
        userList: action.userList,
      }
    case 'REMOVE_USER_LIST': 
      return {
        userList: action.userList,
      }
    default:
      return state
  }
}

export default userListReducer