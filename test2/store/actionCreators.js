
import {
    CHANG_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from './actionTypes';

export const getInputChangeAction = (value) => ({
    type: CHANG_INPUT_VALUE,
    value
})

export const addTodoItem = () => ({
    type: ADD_TODO_ITEM
})

export const deleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

// export const getTodoList = () => {
//     //使用thunk中间件，这样做可以做异步操作
//     return (dispatch) => {
//         //初始化list值
//         // axios.get('/list.json').then((res)=>{
//         //     const action = initListAction(res.data)
//         //     store.dispatch(action)
//         // })
//         let res = ['1', '3', '4'];
//         const action = initListAction(res)
//         dispatch(action)
//     }
// }


export const getInintList = ()=>({
    type:GET_INIT_LIST
})