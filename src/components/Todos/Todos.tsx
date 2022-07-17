import { Todo } from "../../type/todo";
import className from './Todos.module.scss';

export const Todos = () => {
    const todos: Todo[] = [
        {id: 'qqq', name:'sdfsdf'},
        {id: 'www', name:'sdfsdf'},
        {id: 'eee', name:'sdfsdf'},
        {id: 'aaaa', name:'sdfsdf'},
    ];
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