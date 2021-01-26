export const initialState = {
  username: '',
  email: '',
  token: {},
  isAuth: false,
  isFetching: false,
  error: ''
}

export const actions = {
  SET_USER: 'SET_USER',
  CLEAR_USER: 'CLEAR_USER',
  FETCH_DATA: 'FETCH_DATA',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  RESET_STATE: 'RESET_STATE'
}

export const userReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        ...action.payload,
        token: { Authorization: `Bearer ${action.payload.token}` },
        isAuth: true,
        isFetching: false
      }
    case actions.CLEAR_USER:
      return {
        ...initialState
      }
    case actions.FETCH_DATA:
      return {
        ...state,
        isFetching: true
      }
    case actions.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isFetching: false
      }
    case actions.CLEAR_ERROR:
      return {
        ...state,
        error: ''
      }
    case actions.RESET_STATE:
      return {
        ...initialState
      }
    default:
      return state
  }
}
