import {all, call, put, takeLatest,takeEvery} from 'redux-saga/effects'
import { blogService } from '../../services/ortherService'
import { fetchingBlog, fetchingFail, fetchingSuccess } from './BlogSlice'

interface iResponseType {
    success: boolean,
    data: any ,
}

function* fetchBlogSaga () {
    try {
        const response:iResponseType = yield call(() => blogService.getAll())
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
    yield all([takeEvery(fetchingBlog.toString(), fetchBlogSaga)])
}