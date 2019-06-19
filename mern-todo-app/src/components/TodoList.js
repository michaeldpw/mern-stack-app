import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import { getTodoList } from '../store/actions/todoActions'

class TodoList extends React.Component{
  
    componentDidMount(){
       this.props.getTodoList();
    };

    render(){
        return (
            <div className="container todolist">
                <h3>任务栏</h3>
                <table className="table table-striped" style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>内容</th>
                            <th>谁来做</th>
                            <th>优先级</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                           this.props.todos.map(todo => {
                                return (
                                     <Todo todo={todo} key={todo.get('_id')} />   
                                )
                        
                            })
                            
                        }
                        
                    </tbody>
                </table>
                
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        todos: state.get('list')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodoList() { 
            dispatch(getTodoList()) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);