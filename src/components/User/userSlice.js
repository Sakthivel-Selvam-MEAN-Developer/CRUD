import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        id: '1',
        name: 'Sakthivel',
        position: 'Front End Engineer'
    },
    {
        id: '2',
        name: 'Vikas',
        position: 'QA Engineer'
    }
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name, position) {
                return {
                    payload: {
                        id: nanoid(),
                        name: name,
                        position: position
                    }
                }
            }
        },
        editUser: (state, action) => {
            const { id, name, position } = action.payload
            const updateUser = state.find(user => user.id === id)
            if(updateUser){
                updateUser.name = name
                updateUser.position = position
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload
            return state.filter(user => user.id !== id)
        }

    }
})

export default userSlice.reducer
export const { addUser, editUser, deleteUser } = userSlice.actions