import { createSlice } from '@reduxjs/toolkit';
import noticedata from '../../assets/api/noticedata';

// data이름 사용하지 마세요
const initialState = {
    noticeData : noticedata,
};

export const noticeSlice = createSlice({
    name: 'notice',
    initialState,
    reducers: {},
});

// export const {} = noticeSlice.actions;
export default noticeSlice.reducer;
