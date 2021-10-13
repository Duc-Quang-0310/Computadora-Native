import {all, call, put, takeLatest} from 'redux-saga/effects'
import { productService } from '../../services/ortherService'
import { fetchingLaptop, fetchingFail, fetchingSuccess } from './LaptopSlice'

interface iResponType {
    success: boolean,
    data: any ,
}

function* fetchLaptopSaga () {
    try {
        const response:iResponType = yield call(() => productService.getAll())
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

export default function* LaptopSaga () {
    console.log("Laptop Saga");
    yield all([takeLatest(fetchingLaptop.toString(), fetchLaptopSaga)])
}