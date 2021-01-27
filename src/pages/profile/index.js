import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/userContext'

const Profile = ({ history }) => {
  const { signOut, isAuth } = useContext(AuthContext)

  useEffect(() => {
    if (!isAuth) {
      history.replace('/login')
    }
  })

  return (
    <div style={{ marginLeft: '500px' }}>
      Username
      <button onClick={signOut}>
        sign out
      </button>
    </div>
  )
}

export default Profile
