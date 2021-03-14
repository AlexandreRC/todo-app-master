import React, {useRef} from 'react';
import Button from '../Button';


export default function All({todos, setTodos, changeCheck}) { 
    const inputText = useRef();
    return (
        <>
            <div className='insert-todo'>
                <input placeholder='Add details' ref={inputText} type='text'/>
                <Button onClick={() => setTodos([...todos, {name: inputText.current.value, isChecked: true}])} size='lg' color='#2F80ED'>Add</Button>
            </div>
            <div className='todos-container'>
                {todos?.map(item => {
                    return (
                        <div className='todo'>
                            <input onClick={() => changeCheck(item)} type="checkbox" checked={item.isChecked} />
                            <span style={{textDecoration: item.isChecked? 'line-through' : 'auto'}}>{item.name}</span> 
                        </div>
                    )
                    })}
            </div>
        </>
    )
}
