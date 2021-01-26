import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storeValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.error(error)
    }
  }

  const removeLocalStorage = (key) => {
    try {
      window.localStorage.removeItem(key)
      setValue(initialValue)
    } catch (error) {
      console.error(error)
    }
  }

  return [storeValue, setLocalStorage, removeLocalStorage]
}
