import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props)=>{
    const { list,inputValue, handChange, handClick,handDelete } = props;

    return ( 
        <div>
            <div>
                <input onChange={handChange} value={inputValue}/>
                <button onClick={handClick}>点击 </button>
            </div>
            <ul>
                {
                    list.map((item,j)=>{
                        return (
                            <li key={j} onClick={() => {handDelete(j)}}>{item}</li>
                            
                        )
                    })
                }
            </ul>
        </div>
     );
}

 
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispathchToProps = (dispatch) => {
    return {
        handChange(e){
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },

        handClick(){
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },

        handDelete(index){
            // console.log(index)
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispathchToProps)(TodoList);