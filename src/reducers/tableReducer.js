export const initialState = {
  fieldsList: [],
  editMode: false,
  selectedItem: -1
}

export const actions = {
  SET_FIELDS_LIST: 'SET_FIELDS_LIST',
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
    case actions.ENABLE_EDIT_MODE:
      return {
        ...state,
        editMode: true,
        selectedItem: action.payload.selectedItem
      }
    case actions.DISABLE_EDIT_MODE:
      return {
        ...state,
        editMode: false,
        selectedItem: -1
      }
    default:
      return state
  }
}
