export const initialState = {
  transactions: [],
  actualBalance: '0',
  isFetching: true,
  error: '',
  hasMore: true,
  page: 1,
  query: ''
}

export const actions = {
  UPDATE_TRANSACTIONS: 'UPDATE_TRANSACTIONS',
  ADD_PAGE: 'ADD_PAGE',
  UPDATE_QUERY: 'UPDATE_QUERY',
  RESET: 'RESET',
  FETCH_DATA: 'FETCH_DATA',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
}

export const transactionsReducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_TRANSACTIONS:
      return {
        ...state,
        ...action.payload
      }
    case actions.ADD_PAGE:
      return {
        ...state,
        page: action.payload.page
      }
    case actions.UPDATE_QUERY:
      return {
        ...state,
        query: action.payload.query
      }
    case actions.RESET:
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
        isFetching: false,
        error: action.payload.error
      }
    case actions.CLEAR_ERROR:
      return {
        ...state,
        error: ''
      }
    default:
      return state
  }
}
