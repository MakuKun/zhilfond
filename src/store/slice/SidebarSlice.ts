import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../type/IUser";

interface UserState{
    users: IUser[]
    active: boolean
    card: {
        name: string
        email: string
        phone: string
        img: string
    }
    
}

const initialState: UserState = {
    users: [],
    active: false,
    card: {
        email: '',
        name: '',
        phone: '',
        img: ''
    }
}

export const  userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        addUsers(state, action){
            state.users = [...action.payload]
        },
        toggleItem(state){
            state.active = !state.active
        },
        showCard(state, action){
            state.card.name = action.payload.name
            state.card.email = action.payload.email
            state.card.phone = action.payload.phone
            state.card.img = action.payload.img
        }
    }

})

export default userSlice.reducer
export const {addUsers, showCard, toggleItem} = userSlice.actions