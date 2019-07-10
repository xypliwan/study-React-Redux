import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleClick = this.handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){   //提升性能
            return true;
        }else{
            return false;
        }
    }

    render() { 
        // console.log('child-----')
        const { content, test } = this.props;
        return ( 
            <div onClick={this.handleClick}>
               {test} - {content}
            </div>
         );
    }

    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}

TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
TodoItem.defaultProps = {
    test:'hello world'
}
 
export default TodoItem;