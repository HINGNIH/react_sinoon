
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataList:[
        {id:1, username:'홍길동', tel:'010-3333-5555', email:'abc@naver.com', password:'a1234',},
    ],
    authed:false, user:null
};
let no = initialState.dataList.length+1;


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            const {email,password}=action.payload
            const newItem = state.dataList.find(item=>item.email===email);
            if(newItem&&newItem.password===password){
                state.authed = true;
                state.user = newItem;
            }else {
                state.authed=false;
                state.user=null;
            }
        },
        logout(state, action){
            state.authed = false;
            state.user=null;
        },
        signup(state, action){
            state.dataList.push({id:no++, ...action.payload})
        },
    },
});

export const {login, logout, signup } = authSlice.actions;
export default authSlice.reducer;