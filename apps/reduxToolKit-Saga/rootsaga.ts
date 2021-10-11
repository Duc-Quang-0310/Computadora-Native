import { all } from "redux-saga/effects";
import AuthSaga from "./Auth/authSaga";

export default function* rootsaga () {
    console.log("root Saga");
    yield all([AuthSaga()])
}