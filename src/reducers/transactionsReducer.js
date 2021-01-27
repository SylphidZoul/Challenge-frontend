export const initialState = {
  transactions: [],
  pendingFetchedData: null,
  actualBalance: '0',
  isFetching: true,
  error: '',
  serverHasMoreTransactions: true,
  page: 1,
  query: '',
  transactionsNeedReset: false
}

export const actions = {
  UPDATE_TRANSACTIONS: 'UPDATE_TRANSACTIONS',
  ADD_PAGE: 'ADD_PAGE',
  UPDATE_QUERY: 'UPDATE_QUERY',
  RESET_REQUEST_STATE: 'RESET_REQUEST_STATE',
  RESET_TRANSACTIONS: 'RESET_TRANSACTIONS',
  FETCH_DATA: 'FETCH_DATA',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
}

export const transactionsReducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_TRANSACTIONS:
      return {
        ...state,
        ...action.payload,
        isFetching: false,
        pendingFetchedData: null
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
    case actions.RESET_REQUEST_STATE:
      return {
        ...initialState,
        transactionsNeedReset: true,
        transactions: state.transactions
      }
    case actions.RESET_TRANSACTIONS:
      return {
        ...state,
        transactionsNeedReset: false,
        transactions: [],
        pendingFetchedData: action.payload.pendingFetchedData
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
