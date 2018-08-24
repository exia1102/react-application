import React, { Component, Fragment } from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleDelete=this.handleDelete.bind(this);
    }


    render(){
        const { content }=this.props;
        return(
            <Fragment>
                <div
                onClick={this.handleDelete}
                >
                    {content}
                    </div>
            </Fragment>
            )


    }
    handleDelete(){
        const { handleDelete, index }=this.props;
        handleDelete(index);
    }
}
export default TodoItem;