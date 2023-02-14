import React from 'react'
import { useReducer, useEffect } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [];

//parse los datos que se encuentran en el local storage para mostrar en la lista.
const init = () => {
    return JSON.parse (localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

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
    
    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <br />
            <div className="row">
                <div className="col-7">
                    {/* Lista los items */}
                    <TodoList 
                        todos = {todos}  
                        onDeleteTodo={id=>handleDeleteById(id)}
                        onToggleTodo={id=>handleToggleById(id)}
                        />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <br />
                    {/* Formulario de agregar "todo" */}
                    <TodoAdd onNewTodo = {todo => handleNewTodo(todo)}/>
                </div>
            </div>

        </>
    )
}
