import { createSlice } from '@reduxjs/toolkit';

const templateSlice = createSlice({
    name: 'template',
    initialState: 'template text',
    reducers: {
        setTemplateText: (state, action) => {
            state = action.payload;
            return state
        }
    }
});

export const { setTemplateText } = templateSlice.actions;

export default templateSlice.reducer;