import React, { Component } from 'react';
import shortid from 'shortid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            task: ''
         }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.state.task) {
            return;
        }

        this.props.createTodo({...this.state, id: shortid.generate(), completed: false});
        this.setState({
            task: ''
        })
    }

    render() { 
        return ( 
        <form className='NewTodoForm' onSubmit={this.handleSubmit}>
            <label htmlFor='task'>New Todo</label>
            <input type='text'
            placeholder='New Todo'
            id='task' 
            value={this.state.task} 
            name='task' 
            onChange={this.handleChange} 
            />
            <button>Add Todo</button>
        </form> );
    }
}
 
export default NewTodoForm;