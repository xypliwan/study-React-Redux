// 类似与vuex的state

import { CHANG_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION } from './actionTypes';

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    // console.log(state)      //上一次的数据
    // console.log(action)     //传过来的数据 （类型，数据）
    if(action.type === CHANG_INPUT_VALUE){
        //reducer 可以接收state  但是绝不能修改state !!!!!!!
        const newState = JSON.parse(JSON.stringify(state))      //深拷贝
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))      //深拷贝
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState
    }

    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))      //深拷贝
        newState.list.splice(action.index,1);
        return newState
    }

    if(action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state))      //深拷贝
        newState.list = action.data;
        return newState
    }
    
    
    return state;
}