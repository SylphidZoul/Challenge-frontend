import React, { useReducer, createContext, useEffect } from 'react'
import { userReducer, initialState, actions } from '../reducers/userReducer'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Http from '../libs/http'

export const AuthContext = createContext()
const { Provider } = AuthContext

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  const [storagedState, setStoragedState, removeStoragedState] = useLocalStorage('userState', {})

  useEffect(() => {
    getUserFromStorage()
  }, [storagedState])

  useEffect(() => {
    if (state.error) {
      const tick = setTimeout(() => {
        dispatch({ type: actions.CLEAR_ERROR })
      }, 4000)

      return () => clearTimeout(tick)
    }
  }, [state.error])

  const authenticate = async (userData, type) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      const response = await Http.instance.post(`users/${type}`, userData)

      if (response.error) {
        return dispatch({ type: actions.SET_ERROR, payload: { error: response.data } })
      }

      const payload = {
        username: response.data.userData.username,
        email: response.data.userData.email,
        token: response.data.token
      }

      setStoragedState(payload)

      dispatch({ type: actions.SET_USER, payload })
    } catch (error) {
      setError('There was a problem with the network.')
    }
  }

  const getUserFromStorage = () => {
    if (storagedState.username && !state.username) {
      dispatch({ type: actions.SET_USER, payload: storagedState })
    }
  }

  const signOut = () => {
    removeStoragedState('userState')
    dispatch({ type: actions.RESET_STATE })
  }

  const setError = (errorMessage) => {
    dispatch({ type: actions.SET_ERROR, payload: { error: errorMessage } })
  }

  const value = {
    ...state,
    authenticate,
    signOut,
    setError
  }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}
