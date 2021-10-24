import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface iFetchLaptopSuccess {
    datas: any |undefined
    success: boolean |undefined
}

interface iLaptopsData extends iFetchLaptopSuccess  {
    fetchStatus: boolean | undefined
    progress: boolean | undefined
}

interface iFetchLaptopFail extends iFetchLaptopSuccess  {
}

const initialState:iLaptopsData = {
    datas: [],
    fetchStatus: undefined,
    success: undefined,
    progress: undefined
}

export const LaptopSlice = createSlice({
    name: "blog",
    initialState,
    reducers:{
        fetchingLaptop: (state) => {
            state.progress = true
        },
        fetchingSuccess: (state, action: PayloadAction<iFetchLaptopSuccess>) => {
            // console.log("action.payload.datas laptop", action.payload.datas);
            state.datas = action.payload.datas
            state.success = action.payload.success
            state.fetchStatus = true
            state.progress = false
        },
        fetchingFail: (state, action: PayloadAction<iFetchLaptopFail>) => {
            state.datas = undefined
            state.success = action.payload.success
            state.fetchStatus = true
            state.progress = false
        },
    }
})
export const {fetchingLaptop, fetchingSuccess, fetchingFail  } = LaptopSlice.actions
export default LaptopSlice.reducer