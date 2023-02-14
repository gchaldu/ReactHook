import { useReducer, useEffect } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [];

//parse los datos que se encuentran en el local storage para mostrar en la lista.
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatchTodos] = useReducer(todoReducer, initialState, init);

    //guarda los itemas en el local storage cuando detecta un cambio en [todos]
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || []);
    }, [todos])

    //Agrega una nueva tarea al arreglo
    const handleNewTodo = (todos) => {
        const actionAddTodo = {
            type: '[TODO] Agregar Tarea',
            payload: todos
        }
        dispatchTodos(actionAddTodo);
    }
    //Elimina una tarea por Id
    const handleDeleteById = (id) => {
        //console.log(id);
        dispatchTodos({
            type: '[TODO] delete Tarea',
            payload: id
        })
    }

    const handleToggleById = (id) => {
        console.log(id);
        dispatchTodos({
            type: '[TODO] finalizar Tarea',
            payload: id
        })
    }
    const tareasPendientes = (todos) => {
        let newArraglo = [];
        todos.map(res => {
            if (res.done === false) {
                newArraglo.push(res);
            }
            console.log(newArraglo.length)
        })
        return newArraglo.length;
    }

    const tareasTotales = (todos) => {
        return todos.length
    }

    return {
        tareasPendientes,
        handleToggleById,
        handleDeleteById,
        handleNewTodo,
        tareasTotales,
        todos
    }
}
