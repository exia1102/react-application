import React,{ Component , Fragment } from 'react';
import "./style.css";
import { CSSTransition,TransitionGroup } from 'react-transition-group';


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        };
        // this.handleHello=this.handleHello.bind(this);
        this.handleAddItem=this.handleAddItem.bind(this);
    }

    render(){
        return (
            <Fragment>
                <TransitionGroup>

                    {
                        this.state.list.map((item,index)=>{
                            return(<CSSTransition
                                timeout={1000}
                                classNames='fade'
                                appear={true}
                                unmountOnExit
                                onEntered={(el)=>{el.style.color="blue"}}
                                key={index}
                            >
                                <div>{item}</div>
                            </CSSTransition>)
                        })
                    }
                </TransitionGroup>

                <button
                onClick={this.handleAddItem}
                >Toggle</button>
            </Fragment>
        )}

    // handleHello(){
    //     this.setState({
    //         show: this.state.show ? false : true
    //
    //     })
    // }
    handleAddItem(){
        this.setState((prevState)=>({
            list:[...prevState.list,'item']
            })
        )
    }
}

export default App;