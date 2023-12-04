import { useSelector } from 'react-redux'
import { EditUser } from './EditUser'

const UserList = ({ setUserName, setUserPosition, setIsEditted, setUserId }) => {
    const users = useSelector((state) => state.users)

    return (
        <article className="userlist">
            <div className="title d-flex justify-content-between align-items-center">
                <h2 className='p-3 m-0'>Users</h2>
                <button type="button" className='btn btn-warning m-3' data-bs-toggle="modal" data-bs-target="#popup-adduser-form">
                    <img src="/add-icon.svg" alt="add-icon" width={25} />
                </button>
            </div>
            {users.length ? (
                users.map(user => (
                    <div className='user rounded d-flex justify-content-between' key={user.id}>
                        <div className='user-body'>
                            <h2 className='m-0'>{user.name}</h2>
                            <p className='m-0'>{user.position}</p>
                        </div>
                        <EditUser
                            id={user.id}
                            setUserName={setUserName}
                            setUserPosition={setUserPosition}
                            users={users}
                            setIsEditted={setIsEditted}
                            setUserId={setUserId}
                        />
                    </div>
            ))) : (
                <p>No User Data Found...</p>
            )}
        </article>
    )
}

export { UserList }