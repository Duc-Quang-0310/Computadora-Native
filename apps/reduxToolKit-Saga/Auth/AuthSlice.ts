import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { iLoginParams } from '../../services/apiTypes';

export interface iLoginSuccessReturn {
    token: string |undefined,
    userInfo: object | undefined,
    loggingStatus: boolean | undefined
    loggingMessage: string | undefined,

}

export interface iLoginFailureReturn {
    loggingStatus: boolean | undefined
    loggingMessage: string | undefined,
}

export interface iAuthState extends iLoginSuccessReturn{
    isLoggedIn: boolean,
    isLoggingIn: boolean,
}

const initialState:iAuthState = {
    token: '',
    isLoggedIn: false,
    isLoggingIn: false,
    loggingMessage: '' ,
    loggingStatus: undefined,
    userInfo:{}
} 

export const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login: (state, action: PayloadAction<iLoginParams>) => {
            state.isLoggingIn = true
        },
        login_success: (state, action:PayloadAction<iLoginSuccessReturn>) => {
            state.isLoggingIn = false;
            state.isLoggedIn = true;
            state.token  = action.payload.token;
            state.loggingStatus = action.payload.loggingStatus;
            state.loggingMessage = action.payload.loggingMessage;
            state.userInfo = action.payload.userInfo;
        },
        login_fail: (state, action:PayloadAction<iLoginFailureReturn>) => {
            state.isLoggingIn = false;
            state.isLoggedIn = false;
            state.loggingMessage = action.payload.loggingMessage;
            state.loggingStatus = action.payload.loggingStatus;
        },
        logout: (state)  => {
            state.token = ''
            state.isLoggedIn = false
            state.isLoggingIn = false
            state.loggingMessage = '' 
            state.loggingStatus= undefined
            state.userInfo = {}
        },
        reset: (state) => {
            state.isLoggingIn = false
            state.loggingMessage = '' 
        }
        
    }
})

export const { login, login_fail, login_success, logout, reset} = AuthSlice.actions
export default AuthSlice.reducer