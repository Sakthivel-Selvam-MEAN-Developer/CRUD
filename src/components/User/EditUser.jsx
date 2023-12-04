import { deleteUser } from "./userSlice"
import { useDispatch } from 'react-redux'

const EditUser = ({ id, setUserName, setUserPosition, users, setIsEditted, setUserId }) => {
    const dispatch = useDispatch()
    const handleEditUser = () => {
        users.map(user => {
            if (user.id === id) {
                setUserId(id)
                setUserName(user.name)
                setUserPosition(user.position)
                setIsEditted(true)
            }
        })
    }

    const handleDeleteUser = () => {
        console.log(id)
        dispatch(
            deleteUser({ id })
        )
    }

    return (
        <div className="edit d-grid">
            <button className="btn btn" title='Edit User' data-bs-toggle="modal" data-bs-target="#popup-adduser-form" onClick={handleEditUser}>
                <img src="/edit.svg" width={25} alt="edit-icon" />
            </button>
            <button className="btn" title='Delete User' onClick={handleDeleteUser}>
                <img src="/delete.svg" width={25} alt="delete-icon" />
            </button>
        </div>
    )
}

export { EditUser }