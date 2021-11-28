
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

interface iBlogData {
    __v: string
    _id: string
    blog: string[]
    headline: string
    imgHeadline: string[]
}

interface iLaptopData {
    __v: string
    _id: string
    card?: string
    chip?: string
    color?: string
    connection?: string
    imgs: string[]
    name?: string
    pin?: string
    price?: string[]
    ram?: string
    review?: string[]
    screen: string
    storage: string
    weight: string
    window: string
}

interface iBlogResponseType {
    success: boolean
    data: iBlogData[]
}


export type { iLoginParams, iSignUpParams, iPWRecoverParams, iUpdateAdress, iUpdatePassword, iReceipt, iBlogData,iLaptopData, iBlogResponseType }

