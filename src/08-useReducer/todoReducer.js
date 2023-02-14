
export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case '[TODO] Agregar Tarea':
            return [...initialState, action.payload]
        case '[TODO] delete Tarea':
            return initialState.filter(todo => todo.id !== action.payload)
        case '[TODO] finalizar Tarea':
            return initialState.map(todo => {
                if(todo.id === action.payload)
                {
                    return {
                        ...todo, 
                        done: !todo.done
                    }
                }
                return todo
            })
        default:
            return initialState

    }
}
