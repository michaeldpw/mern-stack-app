import React from 'react';
import axios from 'axios';



class EditTodo extends React.Component{

    state = {
        content:'',
        responsible:'',
        priority:'',
        isCompleted: false
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/'+ this.props.match.params.id)
             .then(res => {
                 this.setState({
                     content: res.data.content,
                     responsible: res.data.responsible,
                     priority: res.data.priority,
                     isCompleted: res.data.isCompleted,
                 });
                 console.log(this.state);
             })
             .catch(err => {
                 console.log(err);
             });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    };

    handleCompleteChange = (e) => {
        this.setState({
            isCompleted: !this.state.isCompleted
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            content: this.state.content,
            responsible: this.state.responsible,
            priority: this.state.priority,
            isCompleted: this.state.isCompleted
        }

        axios.post('http://localhost:4000/todos/update/'+ this.props.match.params.id, newTodo)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.props.history.push('/');
        window.location.reload();
    };

    render(){
        return (
            <div className="container todolist">
                <h3>编辑任务 -- "{this.state.content}"</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label><b>内容：</b> </label>
                        <input className="form-control" 
                               type="text" 
                               id="content"
                               autoComplete="off"
                               value={this.state.content}
                               onChange={this.handleChange}
                        />
                        <label><b>谁来做：</b> </label>
                        <input className="form-control" 
                               type="text" 
                               id="responsible"
                               autoComplete="off"
                               value={this.state.responsible}
                               onChange={this.handleChange}
                        />
                        <div className="prioritySelector">
                        <label className="priority_title"><b>优先级：</b></label>
                        <div className='form-check form-check-inline'>
                            <input className="form-check-input" 
                                    type='radio'
                                    name='priorityOption'
                                    id='priority'
                                    value='低'
                                    checked={this.state.priority === '低'}
                                    onChange={this.handleChange}
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
                        <div className="form-check">
                            <input type="checkbox"
                                   className="form-check-input"
                                   id="isCompleted"
                                   name="completedCheckbox"
                                   checked={this.state.isCompleted}
                                   value={this.state.isCompleted}
                                   onChange={this.handleCompleteChange}
                            />
                             <label className="form-check-label" htmlFor="completedCheckbox">
                                 <b>已完成</b>
                             </label>
                        </div>
                        
                    </div>
                  
                   <div className="form-group">
                        <input type="submit"
                               value="保存"
                               className="btn btn-primary"
                        />   
                   </div>

                </form>
            </div>
        )
    }
}


export default EditTodo;