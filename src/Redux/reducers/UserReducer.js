import {createSlice} from '@reduxjs/toolkit';

const userReducer=createSlice({
    name:'userSlice',
    initialState:{
        users:[]
    },

    reducers:{
        addUser:(state,action)=>{
            state.users=[...state.users,action.payload]
        }
    }
})
export const{addUser}=userReducer.actions;
export default userReducer.reducer;