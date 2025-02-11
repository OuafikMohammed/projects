import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice([
    name:"usersx",
    initialState:(
        users:[],
        status:null
    ),
    extraReducers:(builder)=>{
        builder.addCase( getUsersData.pending ,(state,action)=>{
            state.status = "loading"
        })
        builder.addCase(getUsersData.fulfilled,(state,action)=>{
            state.status = "success"
            state.users = action.payload
        })
        builder.addCase(getUsersData.fulfilled,(state,action)=>{
            state.status = "success"
        })
    }
])