const userListAction = (type, action) => {
  // eslint-disable-next-line
  switch (type) {
    case 'GET_USER_LIST':
      return {
        type: 'GET_USER_LIST',
        userList: action.userList,
      }
    case 'REMOVE_USER_LIST':
      return {
        type: 'REMOVE_USER_LIST',
        userList: null,
      }
    }
}

export default userListAction