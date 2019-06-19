import axios from 'axios';

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://localhost:4000/todos')
        .then(res => {          
            dispatch({ type: 'GET_TODOLIST_SUCCESS', todoList: res.data })           
        })
        .catch(err => {
            dispatch({ type: 'GET_TODOLIST_ERROR', err})
        });
    }
}