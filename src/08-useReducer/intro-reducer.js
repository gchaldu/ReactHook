const initialState = [{ 
    id: 1,
    todo: 'Recolectar la piedra del alama',
    done: false
}]

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO], agregar todo')
    {
        return [...state, action.payload];
    }

    return state;
}

const newTodo = { 
    id: 2,
    todo: 'Recolectar la piedra Filosofal',
    done: false
}

const actionAddTodo = {
    type: '[TODO], agregar todo',
    payload: newTodo
}

const todo = todoReducer(initialState, actionAddTodo);
console.log(todo);
