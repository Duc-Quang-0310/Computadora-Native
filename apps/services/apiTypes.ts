
interface iLoginParams {
    username: string
    password: string
}

interface iSignUpParams extends iLoginParams {
    email: string
}

interface iPWRecoverParams extends iLoginParams {
    email: string
}

interface iUpdateAdress extends iLoginParams {
    city: string
    district: string
    subDistrict: string
}

interface iUpdatePassword extends iLoginParams{
    newPassword: string
}

interface iCart {
    name: string
    card: string
    chip: string
    price: string
    imgs: any
    quantity: number
}

interface iReceipt {
    userID: string
    cart: iCart[]
}




export type { iLoginParams, iSignUpParams, iPWRecoverParams, iUpdateAdress, iUpdatePassword, iReceipt }

