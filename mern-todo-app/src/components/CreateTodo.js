import React from 'react';
import './component.css';
import axios from 'axios';

class CreateTodo extends React.Component{

    state = {
        content: "",
        responsible:"", 
        priority: "",
        isCompleted: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        const newTodo = {
            content: this.state.content,
            responsible: this.state.responsible,
            priority: this.state.priority,
            isCompleted: this.state.isCompleted
        }
        axios.post('http://localhost:4000/todos/add', newTodo)
             .then(res => {
                 console.log(res.data)
                 window.location.reload();
             });

        this.setState({
            content: "",
            responsible:"", 
            priority: "",
            isCompleted: false
        })
        this.props.history.push('/');

    }

    render(){
        return (
            <div className="container todolist">
               <h3>新任务</h3>
               <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                        <label><b>内容: </b></label>
                        <input className="form-control" 
                               type="text" 
                               id="content"
                               autoComplete="off"
                               value={this.state.content}
                               onChange={this.handleChange}
                               required
                        />
                        <label><b>执行人:</b> </label>
                        <input className="form-control" 
                               type="text" 
                               id="responsible"
                               autoComplete="off"
                               value={this.state.responsible}
                               onChange={this.handleChange}
                               required
                        />
                        <div className="prioritySelector">
                        <label><b>优先级：</b></label>
                        <div className='form-check form-check-inline'>
                                <input className="form-check-input" 
                                    type='radio'
                                    name='priorityOption'
                                    id='priority'
                                    value='低'
                                    checked={this.state.priority === '低'}
                                    onChange={this.handleChange}
                                    required
                                />
                                <label className='form-check-label'>低</label>
                        </div>
                        <div className='form-check form-check-inline'>
                                <input className="form-check-input" 
                                    type='radio'
                                    name='priorityOption'
                                    id='priority'
                                    value='中'
                                    checked={this.state.priority === '中'}
                                    onChange={this.handleChange}
                                />
                                <label className='form-check-label'>中</label>
                        </div>
                        <div className='form-check form-check-inline'>
                                <input className="form-check-input" 
                                    type='radio'
                                    name='priorityOption'
                                    id='priority'
                                    value='高'
                                    checked={this.state.priority === '高'}
                                    onChange={this.handleChange}
                                />
                                <label className='form-check-label'>高</label>
                        </div>
                        </div>
                       </div>
                  
                   <div className="form-group">
                        <input type="submit"
                               value="+ 创建"
                               className="btn btn-primary"
                        />
                   </div>
               </form>
            </div>
        )
    }
}


export default CreateTodo;