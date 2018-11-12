const userAction = (type, action) => {
  switch (type) {
    case 'GET_USER':
      return {
        type: 'GET_USER',
        user: action.user,
      }
    case 'REMOVE_USER':
      return {
        type: 'REMOVE_USER',
        user: null,
      }
    }
}

export default userAction