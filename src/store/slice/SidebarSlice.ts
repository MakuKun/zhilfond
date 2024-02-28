import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../type/IUser";

interface UserState{
    users: IUser[]
    card: {
        name: string
        email: string
        phone: string
    }
    
}

const initialState: UserState = {
    users: [],
    card: {
        email: '',
        name: '',
        phone: '',
    }
}

export const  userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        addUsers(state, action){
            state.users = [...action.payload]
        },
        showCard(state, action){
            for(const data in action.payload){
                state.card[data] = action.payload[data]
            }
        },
        clearCard(state){
            for(const data in state.card){
                state.card[data] = ''
            }
        }
    }

})

export default userSlice.reducer
export const {addUsers, showCard, clearCard} = userSlice.actions