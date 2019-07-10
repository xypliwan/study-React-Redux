import React, {Fragment } from 'react';
import TodoItem from './TodoItem';

// 无状态组件,适用于UI组件，性能高于extens普通组件
const TodoListUI = (props)=> {
    return (
        <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input 
                        id="insertArea"
                        className='input'
                        value={ props.inputValue }
                        onChange={props.handleInputChange}
                        ref={(input)=>{input = input}}
                    />
                    <button onClick={props.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {
                        props.list.map((item,index)=>{
                            return (
                                    <TodoItem 
                                        key={index}
                                        content={item}
                                        index={index}
                                        deleteItem={(index) =>{props.handleItemDelete(index)}}
                                    />
                            )
                        })
                    }
                    
                </ul>
            </Fragment>
    )
}
 
export default TodoListUI;