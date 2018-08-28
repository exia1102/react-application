import React,{ Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';
import axios from 'axios';

class Todolist extends Component{

    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:[],
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);

    }
    render(){
        return <Fragment>
            <div>
                <label htmlFor="insertarea">Please enter</label>
                <input type="text"
                       id="insertarea"
                       className='input'
                       value={this.state.inputValue}
                       onChange={this.handleInputChange}
                       ref={(input)=>{this.input= input }}
                />
                <button
                    onClick={this.handleBtnClick}
                >submit
                </button>
            </div>
            <ul ref={(ul)=>{this.ul= ul }}>
                {this.getTodoItem()}
            </ul>
        </Fragment>;
    }

    getTodoItem(){
        return this.state.list.map((item, index) => {
            return (

                    <TodoItem index={index} content={item} key={item}
                              handleDelete={this.handleItemDelete}
                    />

            )
        })
    }

    componentDidMount(){
        axios.get("/api/todolist.json")
            .then((res)=>{
                this.setState(()=>({
                    list:[...res.data]
                }))
            })
            .catch(()=>{alert('error')})
    }

    handleInputChange() {
        const value = this.input.value;
        this.setState(() => ({
            inputValue:value,
        }))
    }


    handleBtnClick(){
        this.setState((prevState)=>({
            list: [...prevState.list,prevState.inputValue],
            inputValue:'',
        }),()=>{console.log(this.ul.querySelectorAll('div').length)})
    }
    handleItemDelete(index){
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index,1);
           return {list};
        })
    }
}
export default Todolist;