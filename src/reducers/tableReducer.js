export const initialState = {
  fieldsList: [],
  hasCreateModeOn: false,
  hasEditModeOn: false,
  selectedItem: -1
}

export const actions = {
  SET_FIELDS_LIST: 'SET_FIELDS_LIST',
  ENABLE_CREATE_MODE: 'ENABLE_CREATE_MODE',
  DISABLE_CREATE_MODE: 'DISABLE_CREATE_MODE',
  ENABLE_EDIT_MODE: 'ENABLE_EDIT_MODE',
  DISABLE_EDIT_MODE: 'DISABLE_EDIT_MODE'
}

export const tableReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_FIELDS_LIST:
      return {
        ...state,
        fieldsList: action.payload.fields
      }
    case actions.ENABLE_CREATE_MODE:
      return {
        ...state,
        hasCreateModeOn: true,
        hasEditModeOn: false,
        selectedItem: -1
      }
    case actions.DISABLE_CREATE_MODE:
      return {
        ...state,
        hasCreateModeOn: false
      }
    case actions.ENABLE_EDIT_MODE:
      return {
        ...state,
        hasEditModeOn: true,
        selectedItem: action.payload.selectedItem,
        hasCreateModeOn: false
      }
    case actions.DISABLE_EDIT_MODE:
      return {
        ...state,
        hasEditModeOn: false,
        selectedItem: -1
      }
    default:
      return state
  }
}
