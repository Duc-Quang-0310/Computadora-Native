import {all, call, put, takeLatest} from 'redux-saga/effects'
import { authServices } from '../../services/authServices'
import { login, login_fail, login_success, logout, reset } from './AuthSlice'
import { PayloadAction } from "@reduxjs/toolkit";
import { route } from '../../common/configs/routes/routeName'
import { iLoginParams } from '../../services/apiTypes';
import { AppStorage } from '../../common/helpers/storage';
import { useHistory } from 'react-router';


export interface iLoginDataType {
    user: object
    token: string
}

export interface iResponType {
    message: string,
    success: boolean,
    data: iLoginDataType ,
}

function* loginSaga ( action: PayloadAction<iLoginParams>) {
    console.log("action.payload from login Saga", action.payload );
    try {
        const response:iResponType = yield call(() => authServices.login(action.payload))
        
        if( response.success  ) {
            AppStorage.setStorage( "token", response.data.token)
            yield put(login_success( {
                token: response.data?.token, 
                userInfo: response.data?.user, 
                loggingStatus: response.success, 
                loggingMessage: response.message 
            } ))

            setTimeout(() => {
                const history = useHistory();
                history.push(route.HOME)
            }, 600);
            yield put(reset())
        }        
    } catch (error: any) {        
        yield put (login_fail({
            loggingMessage: error.response.data.message,
            loggingStatus: error.response.data.success
        }))
    }
}

function* logoutSaga ( ){
    
    try {
        AppStorage.removeStorage("token")
        yield put(logout())
        setTimeout(() => {
            const history = useHistory();
            history.push(route.HOME)
        }, 400);
    } catch (error) {
        console.log(error);
    }
}

export default function* AuthSaga () {
    console.log("Auth Saga");
    yield all([takeLatest(login.toString(), loginSaga), takeLatest(logout.toString(), logoutSaga)])
}
