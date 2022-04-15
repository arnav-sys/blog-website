import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        username:localStorage.getItem("username"),
        email:localStorage.getItem("email"),
        password:localStorage.getItem("password"),
    },
    reducers:{
        addusername: (state,action) => {
            state.username = action.payload
            localStorage.setItem("username",action.payload)
        },
        addemail:(state,action) => {
            state.email = action.payload
            localStorage.setItem("email",action.payload)
        },
        addpassword:(state,action) => {
            state.password = action.payload
            localStorage.setItem("password",action.payload)
        }
    }
})

export const {addusername,addemail,addpassword} = userSlice.actions

export const selectUser = (state) => state

export default userSlice.reducer