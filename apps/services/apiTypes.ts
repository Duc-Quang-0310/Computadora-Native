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


export type { iLoginParams, iSignUpParams, iPWRecoverParams }

