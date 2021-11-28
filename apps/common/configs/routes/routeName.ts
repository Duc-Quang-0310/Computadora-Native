export const route = {
    LOADING: "/loading",
    HOME: "/home",
    SIGNIN:"/users/sign-in",
    SIGNUP:"/users/sign-up",
    SIGNUP_SUCCESS: "/users/sign-up/success/:token",
    PWRECOVER: "/users/pw-recovery",
    PWRECOVER_SUCCESS:"/users/pw-recovery/:token",
    PROFILE: "/profile",
    ADDRESS: "/profile/address",
    PW_CHANGE: "/profile/pw-change",
    SEARCH:"/search",
    CART: "/cart",
    CART_ADD_SUCCESS: "/cart/add-success",
    BLOG: "/blog",
    BLOG_DETAILS: "/blog/details/:id",
    BUY_HISTORY: "/buy-history",
    RECEIPT: "/receipt",
    RECEIPT_SUCCESS:"/receipt-success",
    LAPTOP: "/laptop",
    LAPTOP_DETAILS: "/laptop/details/:id",
    DETAILS_ROUTE: (id: string, type: "laptop"|"blog") => {
        return type === "blog" ? `/blog/details/${id}` : `/laptop/details/${id}`
    }
}


export interface iRoute {
    path: string,
    exact: boolean,
    component: any,
    props?: any,
}

export interface iToken{
    token: string
}