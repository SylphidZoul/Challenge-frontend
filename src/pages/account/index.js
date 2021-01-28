import React, { useContext } from 'react'
import { AuthContext } from '../../context/userContext'
import { MainLayout } from '../../styles/mainLayout'
import { ProfileWrapper, DataDiv, DataRow, Field, UserValue, LogOutButton } from './styles'
import { SignOutIcon } from '../../assets/signout'
import { ProfilePictureIcon } from '../../assets/profilePicture'

const Account = () => {
  const { signOut, username, email } = useContext(AuthContext)

  return (
    <MainLayout>
      <ProfileWrapper>
        <ProfilePictureIcon size={128} />
        <DataDiv>
          <DataRow>
            <Field>Username</Field><UserValue>{username}</UserValue>
          </DataRow>
          <DataRow>
            <Field>Email</Field><UserValue>{email}</UserValue>
          </DataRow>
        </DataDiv>
        <LogOutButton onClick={signOut}>
          Sign Out
          <SignOutIcon />
        </LogOutButton>
      </ProfileWrapper>
    </MainLayout>
  )
}

export default Account
