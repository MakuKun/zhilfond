import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../type/IUser";

interface UserState{
    users: IUser[]
    active: boolean
}

const initialState: UserState = {
    users: [],
    active: false
}

export const  userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        addUsers(state, action){
            state.users = [...action.payload]
        },
        clearUsers(state){
            state.users
        }
    }

})

export default userSlice.reducer
export const {addUsers, clearUsers} = userSlice.actions