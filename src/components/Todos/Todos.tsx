import { Todo } from "../../type/todo";
import className from './Todos.module.scss';
import { useSelector } from "react-redux";
import { todosSelector } from "../../redux/todosSelector";

export const Todos = () => {
    const todos: Todo[] = useSelector(todosSelector);
    return (
    <ul className={className.lists}>
        {todos.map(({id, name}) => (
            <li key={id} className={className.todo}>
                <input type="checkbox" className={className.check}/>
                <span className={className.name}>{name}</span>
                <button type="button" className={className.delete}>x</button>
            </li>
        ))}
    </ul>
    )
}