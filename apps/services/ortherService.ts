import { API_PATH } from "../common/constants/apiPath";
import { AxiosClient } from "./api/axiosConnection";
import { iReceipt, iUpdateAdress, iUpdatePassword } from "./apiTypes";

export const productService = {
    getAll: async () => {
        const {data} = await AxiosClient.get(API_PATH.PRODUCT.GET_ALL)
        return data
    },
    getDetails: async ( id: string ) => {
        const {data} = await AxiosClient.get(API_PATH.PRODUCT.GET_ONE(id))
        return data
    },
}

export const blogService = {
    getAll: async () => {
        const {data} = await AxiosClient.get(API_PATH.BLOG.GET_ALL)
        return data
    },
    getDetails: async ( id: string ) => {
        const {data} = await AxiosClient.get(API_PATH.BLOG.GET_ONE(id))
        return data
    },
}

export const receiptService = {
    getAll: async () => {
        const {data} = await AxiosClient.get(API_PATH.RECEIPT.GET_ALL)
        return data
    },
    getByUserID: async ( id: string ) => {
        const {data} = await AxiosClient.get(API_PATH.RECEIPT.GETALL_BY_USERID(id))
        return data
    },
    postReceipt: async (receipt: iReceipt) => {
        const {data} = await AxiosClient.post(API_PATH.RECEIPT.POST_ONE, receipt )
        return data
    }
}

export const userInfoService = {
    updateAddress: async (infomations: iUpdateAdress) => {
        const {data} = await AxiosClient.put(API_PATH.USER_INFO.UPDATE_SHIP, infomations )
        return data
    },
    updatePassword: async ( newPassword: iUpdatePassword ) => {
        const {data} = await AxiosClient.put(API_PATH.USER_INFO.UPDATE_PASSWORD, newPassword)
        return data
    },
}


