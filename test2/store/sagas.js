import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators';

function* getInitList() {
    //异步请求
    // axios.get()...
    // let res = ['1','2','444']
    // const action = initListAction(res)
    // // console.log(action)
    // put(action)



    //yield等待，类似awit

    try {
        // const res = yield axios.get('xxx.php')
        const res = ['1','2','444'];
        const action = initListAction(res)
        yield put(action)
    } catch (error) {
        console.log(error)
    }
    


}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
  
export default mySaga;