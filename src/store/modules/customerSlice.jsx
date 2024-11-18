import { createSlice } from '@reduxjs/toolkit';
import customerdata from '../../assets/api/customerdata';

const initialState = {
    customerData : customerdata, 
    current:{},
};

let no = customerdata.length+1;

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        add(state, action) {
            state.customerData.push({
                id: no++, ...action.payload
            })
        },
        edit(state, action) {state.current = action.payload},

        del(state, action) {
            state.customerData = 
            state.customerData.filter(item=>item.id!== action.payload)
        }, 
        update(state, action){
            state.customerData = state.customerData.map(item=>item.id===action.payload.id?  action.payload : item )
        }
    },
});

export const {add, edit, del, update} = customerSlice.actions;
export default customerSlice.reducer;
