import React, { Component, Fragment } from 'react';

import './style.css';
import store from './store';
import { getInputChangeAction,addTodoItem,deleteTodoItem,getInintList } from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()       //获取store里面的数据
        // console.log(store.getState())
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)

        this.handleStoreChange = this.handleStoreChange.bind(this);
        //监听store的变化，相当于vuex的getter
        store.subscribe(this.handleStoreChange);        
    }
    render() { 
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
                list={this.state.list}
                />
         );
    }

    componentDidMount() {
        const action = getInintList();
        store.dispatch(action)

        // const action = getTodoList();
        // store.dispatch(action)

        // axios.get('/list.json').then((res)=>{
        //     const action = initListAction(res.data)
        //     store.dispatch(action)
        // })
        // let res = ['1', '3', '4'];
        // const action = initListAction(res)
        // store.dispatch(action)
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)      //提交数据改变store
    }

    handleStoreChange(){
        // console.log(store.getState())
        this.setState(store.getState())
    }

    handleBtnClick(){
        const action = addTodoItem()
        store.dispatch(action)
     
    }

    handleItemDelete(index){
        const action = deleteTodoItem(index)
        store.dispatch(action)
        // this.setState((prevState)=> {
        //     const list = [...prevState.list];
        //     list.splice(index,1)
        //     return { list }
        // });
    }
}
 
export default TodoList;