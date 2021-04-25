import React,{useState} from 'react';

import TodoList from "./TodoList";
import NewToDo from "./NewToDo";
import {Todo} from "./todo.model";


const App: React.FC = () =>{
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoDeleteHandler = (todoId: string) => {
        setTodos(prevTodos=>{
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    }

    const todoHandler = (text: string) => {

        setTodos(prevTodos=>[
            ...prevTodos,
            {id: Math.random().toString(), text: text}
        ]);
    };

    return (
    <div className="App">
      <NewToDo onAddToDo={todoHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
