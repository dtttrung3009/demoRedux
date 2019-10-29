import {INCREMENT, DECREMENT} from "../actions/actionTypes";
import {delay} from 'redux-saga';
import {put,takeEvery} from 'redux-saga/effects'
export function* sayHello() {
    console.log("Hello word !");
}
export function* watchIncrement() {

}
