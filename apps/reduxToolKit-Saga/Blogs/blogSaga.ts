import {all, call, put, takeLatest} from 'redux-saga/effects'
import { blogService } from '../../services/ortherService'
import { fetchingBlog, fetchingFail, fetchingSuccess } from './BlogSlice'

interface iResponType {
    success: boolean,
    data: any ,
}

function* fetchBlogSaga () {
    try {
        const response:iResponType = yield call(() => blogService.getAll())
        console.log("response", response);
        if( response.success  ) {
            yield put(fetchingSuccess({
                datas: response.data,
                success: response.success
            }))
        }        

    } catch (error:any) {
        yield put (fetchingFail({
            datas: error.response.data.data,
            success: error.response.data.success
        }))
    }
}

export default function* BlogSaga () {
    console.log("Blog Saga");
    yield all([takeLatest(fetchingBlog.toString(), fetchBlogSaga)])
}