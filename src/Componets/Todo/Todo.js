import react from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'
import '../Todo/Todo.css';

const Todo = ({name, deleteTodo}) => {
    return(
        <Alert variant="primary" className='singleTodo'>
            <h2>{name}</h2>
            <Button variant="danger" size="sm" onClick={() => {deleteTodo(name)}}>Delete</Button>
            {/* <button onClick={() => {deleteTodo(name)}}>Delete</button> */}
        </Alert>
    );
}

export default Todo;