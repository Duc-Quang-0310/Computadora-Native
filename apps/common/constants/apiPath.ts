import {baseURL} from "../../services/api/axiosAddress"

export const API_PATH ={
    AUTH: {
        LOGIN: "api/user/login",
        REGISTER_UNCONFIRM: "api/user/sendUserInfoToRegisterDB",
        REGISTER_CONFIRM: (token: string):string => {
            return `api/user/registerConfirm/${token}`
        },
        PWRECOVERY_UNCONFIRM: "api/user/pwRecoverSendRequestToBackEnd",
        PWRECOVERY_CONFIRM: (token: string):string => {
            return `api/user/pwRecoverConfirmation/${token}`
        }
    },
    PRODUCT: {
        GET_ALL: "products/",
        GET_ONE: (id: string):string => {
            return `products/${id}`
        }
    },
    BLOG:{
        GET_ALL: "blogs/",
        GET_ONE: (id: string):string => {
            return `blogs/${id}`
        }
    },
    RECEIPT:{
        //This path i actually dont understand what past me trying to do ??????  
        //-- maybe he wanted to see all the data ???
        GET_ALL: "receipts/",
        GETALL_BY_USERID: ( userId:string ):string => {
            return `receipts/${userId} `
        },
        POST_ONE : "receipts/"
    },
   USER_INFO:{
        UPDATE_SHIP: "api/updateUserInfo/updateShip",
        UPDATE_PASSWORD: "api/updateUserInfo/updatePassWord"
   }
}