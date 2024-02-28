import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slice/SidebarSlice";
import { usersApi } from "../query/UsersQuery";


export const store = () => {
    return configureStore({
        reducer:{
            user: userSlice,
            [usersApi.reducerPath]: usersApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
    })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']