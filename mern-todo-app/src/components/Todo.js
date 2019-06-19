import React from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';



const Todo = (props) => {


    const handleClick = (e) => {
        console.log(props.todo._id);
        axios.delete('http://localhost:4000/todos/delete/'+props.todo.get('_id'))
             .then(res => {
                 console.log(res.data);
                 window.location.reload();
             }).catch(err => {
                 console.log(err);
             });
    };
    
        return (
            <tr> 
                <td className={props.todo.get('isCompleted')? "completed" : null}>{props.todo.get('content')}</td>
                <td className={props.todo.get('isCompleted')? "completed" : null}>{props.todo.get('responsible')}</td>
                <td className={props.todo.get('isCompleted')? "completed" : null}>{props.todo.get('priority')}</td>
                <td>
                    <Link to={"/edit/"+props.todo.get('_id')}>编辑</Link>
                    &nbsp;|&nbsp;
                    <span onClick={handleClick} style={{color:'red', cursor:'pointer'}}>
                    删除
                    </span>
                </td>
            </tr>
        )
    
}


export default Todo;