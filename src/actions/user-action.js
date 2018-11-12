const userAction = (type, action) => {
  // eslint-disable-next-line
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