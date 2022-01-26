import { useState } from 'react';
import TodoList from '../TodoList/TodoList.js';
import { Container, Col, Row } from 'react-bootstrap';
import '../Box/Box.css';

const Box = () => {

    const [list, setList] = useState([]);

    const addTodo = () => {

        const newTodo = document.getElementById('inputBar').value;

        if (newTodo === '') {
            alert('To do task cannot be empty');
            return;
        }

        for (let i = 0; i < list.length; i++)
            if (list[i] === newTodo) {
                document.getElementById('inputBar').value = '';
                alert('This to do already exists');
                return;
            }

        setList((prevState) => [...prevState, newTodo]);
        document.getElementById('inputBar').value = '';      
    }

    const clearAll = () => {

        setList([]);
    }

    const deleteTodo = (name) => {
        setList(list.filter((value) => value !== name))
    }

    return(
        <div>
            <span>
                <input type='text' placeholder='Add TO-DO' id='inputBar'/>
                <button onClick={addTodo}>Add Todo</button>
            </span>
            <Container>  
                <div className='wrapper'>
                    <TodoList list={list} deleteTodo={deleteTodo}/> 
                </div>
            </Container>
            <p>You have {list.length} pending tasks</p>
            <button onClick={clearAll}>Clear All</button>
        </div>
    );
}

export default Box;