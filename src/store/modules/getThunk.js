import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const xxPosts = createAsyncThunk('xx/xxPosts', async () => {
    const res = await axios.get(``);
    return res.data;
});
