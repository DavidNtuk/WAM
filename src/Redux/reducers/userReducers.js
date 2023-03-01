import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        isLoggedIn: false,
        token: null,
    },
    reducers: {
        loginUser: (state, action) => {
            const { token, ...payload } = action.payload;
            state.user = payload.user;
            state.token = token.secret;
            state.isLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(state.user));
            localStorage.setItem('token', JSON.stringify(state.token));
        },
        reloadUser: (state, action) => {
            const { token, ...payload } = action.payload;
            state.user = payload.user;
            state.token = token;
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            state.user = {};
            state.token = null;
            state.isLoggedIn = false;
            localStorage.clear();
        }
    }
});

export const { loginUser, reloadUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;