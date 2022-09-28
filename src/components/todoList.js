import Todo from "./Todo";
import styles from "../style.module.css";

const TodoList = ({todoList, setTodoList}) => {
    return <div className={styles.todolist}>
        {todoList.map((todoItem) => (
            <Todo todoList={todoList} setTodoList={setTodoList} key={todoItem.id} todoItem={todoItem}></Todo>
        ))}
    </div>
}

export default TodoList;