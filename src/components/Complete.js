import React, {useEffect, useState} from 'react';

export default function Complete({todos, setTodos, changeCheck}) {  
    const trashIcon = process.env.PUBLIC_URL + './img/trash-2.svg';
    const [activeTodo, setActiveTodo] = useState([]);
    useEffect(() => {
        setActiveTodo(todos.filter(item => item.isChecked? true : false));
    }, [todos]);

    const deleteTodo = (deletedTodo) => {
        setTodos(todos.filter(item => deletedTodo === item? false : true));
    }
    return (
        <>
            <div className='todos-container'>
                {activeTodo?.map(item => {
                return (
                    <div className='todo'>
                        <input onClick={() => changeCheck(item)} type="checkbox" checked={item.isChecked} />
                        <span style={{textDecoration: item.isChecked? 'line-through' : 'auto'}}>{item.name}</span> 
                        <img onClick={() => deleteTodo(item)} alt='delete' src={trashIcon}/>
                    </div>
                )
                })}
            </div>
        </>
    )
}
