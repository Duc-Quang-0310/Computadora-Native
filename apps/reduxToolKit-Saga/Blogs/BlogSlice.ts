import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface iFetchBlogSuccess {
    datas: any |undefined
    success: boolean |undefined
}

interface iBlogsData extends iFetchBlogSuccess  {
    fetchStatus: boolean | undefined
    progress: boolean | undefined
}

interface iFetchBlogFail extends iFetchBlogSuccess  {
}

const initialState:iBlogsData = {
    datas: [],
    fetchStatus: undefined,
    success: undefined,
    progress: undefined
}

export const BlogSlice = createSlice({
    name: "blog",
    initialState,
    reducers:{
        fetchingBlog: (state) => {
            state.progress = true
        },
        fetchingSuccess: (state, action: PayloadAction<iFetchBlogSuccess>) => {
            state.datas = action.payload.datas
            state.success = action.payload.success
            state.fetchStatus = true
            state.progress = false
        },
        fetchingFail: (state, action: PayloadAction<iFetchBlogFail>) => {
            state.datas = undefined
            state.success = action.payload.success
            state.fetchStatus = true
            state.progress = false
        },
    }
})
export const {fetchingBlog, fetchingSuccess, fetchingFail  } = BlogSlice.actions
export default BlogSlice.reducer