import './App.css'
import { AddUser } from './components/User/AddUser'
import { UserList } from './components/User/UserList'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

function App() {
  const dispatch = useDispatch()
  const [isEditted, setIsEditted] = useState(false)
  const [userName, setUserName] = useState('')
  const [userPosition, setUserPosition] = useState('')
  const [userId, setUserId] = useState('')

  return (
    <div className="app">
      <UserList
        dispatch={dispatch}
        setUserName={setUserName}
        setUserPosition={setUserPosition}
        setIsEditted={setIsEditted}
        setUserId={setUserId}
      />
      <AddUser
        userName={userName}
        userPosition={userPosition}
        setUserName={setUserName}
        setUserPosition={setUserPosition}
        isEditted={isEditted}
        setIsEditted={setIsEditted}
        userId={userId}
        setUserId={setUserId}
      />
    </div>
  )
}

export default App
