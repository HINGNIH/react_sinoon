
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageData:[],
    currPage :1, 
    totalPage:1,
    postsPerPage:10,

};

export const pagenationSlice = createSlice({
    name: 'pagenation',
    initialState,
    reducers: {
        addData(state, action){
            state.pageData=[...action.payload].sort((a, b)=>b.id-a.id);
        },
        totalData(state, action) {
            state.currPage=1;
            state.totalPage=Math.ceil(state.pageData.length/state.postsPerPage)
        },
        nextPage(state, action){
            if(state.currPage<state.totalPage){
                state.currPage++;
            }
        },
        prevPage(state, action){
            if(state.currPage===1){
                state.currPage=1;
            } else {
                state.currPage--;
            }
        },
        currentPage(state, action) {
            state.currPage=action.payload
        },
        firstPage(state, action) {
            state.currPage=1;
        },
        lastPage(state, action){
            state.currPage=state.totalPage
        }
    },
});

export const {addData, totalData, nextPage, prevPage, currentPage, firstPage, lastPage } = pagenationSlice.actions;
export default pagenationSlice.reducer;