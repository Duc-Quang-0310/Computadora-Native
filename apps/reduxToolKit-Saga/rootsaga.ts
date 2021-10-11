import { all } from "redux-saga/effects";
import AuthSaga from "./Auth/authSaga";
import BlogSaga from "./Blogs/blogSaga";
import LaptopSaga from "./Laptop/laptopSaga";


export default function* rootsaga () {
    console.log("root Saga");
    yield all([AuthSaga(), LaptopSaga(), BlogSaga()])
}