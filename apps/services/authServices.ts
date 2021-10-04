import { API_PATH } from "../common/constants/apiPath";
import { AxiosClient } from "./api/axiosConnection";
import { iLoginParams, iPWRecoverParams, iSignUpParams } from "./apiTypes";

export const authServices = {
    login: async( params: iLoginParams ) => {
        const {data} = await AxiosClient.post(API_PATH.AUTH.LOGIN, params)
        return data
    },
    register_unconfirm: async( params: iSignUpParams) => {
        const {data} = await AxiosClient.post(API_PATH.AUTH.REGISTER_UNCONFIRM, params)
        return data
    },
    register_confirm: async( token: string ) => {
        const {data} = await AxiosClient.post(API_PATH.AUTH.REGISTER_CONFIRM(token))
        return data
    },
    pwrecovery_unconfirm: async(params: iPWRecoverParams) => {
        const {data} = await AxiosClient.post(API_PATH.AUTH.PWRECOVERY_UNCONFIRM, params)
        return data
    },
    pwrecovery_confirm: async( token: string) => {
        const { data } = await AxiosClient.post(API_PATH.AUTH.PWRECOVERY_CONFIRM(token))
        return data
    }
}

