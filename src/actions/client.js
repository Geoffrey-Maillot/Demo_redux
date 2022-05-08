// Actions list
export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_ONE_USER = 'FETCH_ONE_USER'

export const FETCH_USERS_TO_STATE = 'FETCH_USERS_TO_STATE '
export const FETCH_ONE_USER_TO_STATE = 'FETCH_ONE_USER_TO_STATE '

// Actions creator
export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const fetchOneUser = (id) => ({
  type: FETCH_ONE_USER,
  id
});

export const fetchUsersToState = (users) => ({
  type: FETCH_USERS_TO_STATE,
  users
});

export const fetchOneUserToState = (user) => ({
  type: FETCH_ONE_USER_TO_STATE,
  user
});