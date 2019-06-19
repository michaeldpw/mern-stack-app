import { fromJS } from 'immutable';

const defaultState = fromJS({
    list:[]
})

const todoReducer = (state=defaultState, action) => {
    switch(action.type){
        case 'GET_TODOLIST_SUCCESS':
            const addedList = action.todoList;
            console.log(addedList);
            return state.merge({
                list: fromJS(action.todoList)
            })
        case 'GET_TODOLIST_ERROR':
            console.log(action.err);
            return state;
        default:
            return state; 
    }
};

export default todoReducer;

