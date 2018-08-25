import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';



class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleDelete=this.handleDelete.bind(this);
    }


    render(){
        const { content,test }=this.props;
        return(
            <Fragment>
                <div
                onClick={this.handleDelete}
                >
                    {test}{content}
                    </div>
            </Fragment>
            )
    }
    handleDelete(){
        const { handleDelete, index }=this.props;
        handleDelete(index);
    }
}

TodoItem.propTypes={
    content:propTypes.string,
    handleDelete:propTypes.func,
}

// TodoItem.defaultProps={
//     test:'123',
// }
export default TodoItem;