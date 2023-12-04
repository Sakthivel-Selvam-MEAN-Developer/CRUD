import { addUser, editUser } from "./userSlice"
import { useDispatch } from 'react-redux'

const AddUser = ({ userName, userPosition, setUserName, setUserPosition, isEditted, setIsEditted, setUserId, userId }) => {
    const dispatch = useDispatch()
    const handleAddUser = () => {
        if (userName && userPosition && !isEditted) {
            dispatch(
                addUser(userName, userPosition)
            )
            setUserName('')
            setUserPosition('')
        } else if (userName && userPosition && isEditted) {
            dispatch(
                editUser({
                    id: userId,
                    name: userName,
                    position: userPosition
                })
            )
            setUserName('')
            setUserPosition('')
        } else {
            alert('All Fields Must be Filled...')
            setUserName('')
            setUserPosition('')
        }
    }

    return (
        <div className="modal fade" id="popup-adduser-form" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Add User</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-name mb-2">
                            <label className="mt-2 mb-1" htmlFor="name">Name</label>
                            <input className="form-control" type="text" name="name" id="name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className="user-position mb-2">
                            <label className="mt-2 mb-1" htmlFor="position">Position</label>
                            <input className="form-control" type="text" name="position" id="position" value={userPosition} onChange={(e) => setUserPosition(e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={handleAddUser}>Add to List</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AddUser }