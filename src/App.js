import './App.css';
import {useState} from 'react';
import All from './components/All';
import Active from './components/Active';
import Complete from './components/Complete';

function App() {
  const changeMode = (num) => {
    setMode(num)
  }
  const getMode = () => {
    if (mode === 2) {
      return <Active todos={todos} setTodos={setTodos} changeCheck={changeCheck}/>
    }
    if (mode === 3) {
      return <Complete todos={todos} setTodos={setTodos} changeCheck={changeCheck}/>
    }
    else {
      return <All todos={todos} setTodos={setTodos} changeCheck={changeCheck}/>
    }
  }
  const [mode, setMode] = useState(1);
  const [todos, setTodos] = useState([{name: 'John', isChecked: true},{name: 'John', isChecked: false}]);
  const changeCheck = (todo) => {
    setTodos(todos?.map(item => {
      return(
      item === todo
      ? {...item, isChecked: !item.isChecked}  
      : item)
    }));
  }

  return (
    <div className="App">
      <h1>#todo</h1>
      <div className='state'>
        <span style={{color: mode === 1? '#2F80ED' : 'black'}} onClick={() => changeMode(1)}>All</span>
        <span style={{color: mode === 2? '#2F80ED' : 'black'}} onClick={() => changeMode(2)}>Active</span>
        <span style={{color: mode === 3? '#2F80ED' : 'black'}} onClick={() => changeMode(3)}>Completed</span>
      </div>
      {getMode()}
    </div>
  );
}

export default App;
