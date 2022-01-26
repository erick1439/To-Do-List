import Todo from '../Todo/Todo.js'

const TodoList = ({list, deleteTodo}) => {
    return(
        <div>
            {list.map((name, index) => {
                return <div key={index}><Todo name={name} deleteTodo={deleteTodo}/></div>
            })}
        </div>
    );
}

export default TodoList;