
import { useTodos } from '../hooks/useTodos';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {

    const {todos, handleNewTodo,handleDeleteById, handleToggleById, tareasPendientes,tareasTotales } = useTodos();
     
    return (
        <>
            <h1>TodoApp: {tareasTotales(todos)},
                <small>
                    pendientes: {tareasPendientes(todos)}
                </small></h1>
            <br />
            <div className="row">
                <div className="col-7">
                    {/* Lista los items */}
                    <TodoList
                        todos={todos}
                        onDeleteTodo={id => handleDeleteById(id)}
                        onToggleTodo={id => handleToggleById(id)}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <br />
                    {/* Formulario de agregar "todo" */}
                    <TodoAdd onNewTodo={todo => handleNewTodo(todo)} />
                </div>
            </div>

        </>
    )
}
