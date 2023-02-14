import { useForm } from "../hooks/useForm"
export const TodoAdd = ({ onNewTodo }) => {

    //desestructura el useForm.js
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        // el evento al enviar el formulario para evitar una recarga / actualización del navegador
        event.preventDefault();
        if (description.length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text"
                placeholder='¿Que hay que hacer?'
                className='form-control'
                name="description"
                value={description}
                onChange={onInputChange}
            />

            <button type='submit' className='btn btn-outline-primary mt-2'>
                Agregar
            </button>
        </form>
    )
}
