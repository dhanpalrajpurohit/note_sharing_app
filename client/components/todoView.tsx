import React,{ useState } from 'react';

interface TodoInterface {
    id: number;
    description: string;
    status: boolean;
}


const TodoView:React.FC = () => {

    const [todoList, setTodoList] = useState<TodoInterface[]>([{id: 1, description: "Learn TypeScript", status: false}]);
    const [inputTodo, setInputTodo] = useState<TodoInterface>();

    const handleAddTodo = (input:string) => {
        if (input.trim() === '') return;
        const item: TodoInterface = {id:todoList.length + 1, description: input, status: false}
        setTodoList((prevTodos) => [...prevTodos, item]);
    };

    const handleToggleTodo = (id:number) => {
        setTodoList((todoList) =>
        todoList.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, status: !todo.status };
                }
                return todo;
            })
        );
    };



    const handleDeleteTodo = (id:number) => {
        setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
    };


    return (
        <div>
            <div className="max-w-[50%] mx-auto px-4 py-20 content-center">
                <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
                <div className="mb-4 flex">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
                        placeholder="Add a new todo"
                        onChange={(e) => handleAddTodo(e.target.value)}
                    />
                    <button
                        type="button"
                        className="ml-2 bg-indigo-500 text-white py-2 px-4 rounded-sm font-semibold hover:bg-indigo-600 transition-colors"
                        onClick={()=>handleAddTodo}
                    >
                        Add
                    </button>
                </div>
                <ul className="space-y-4">
                    {todoList.map((todo) => (
                        <li
                            key={todo.id}
                            className={`flex items-center justify-between px-4 py-2 border border-gray-300 rounded-sm bg-white`}
                        >
                            <span
                                className={`flex-grow ml-2 cursor-pointer ${todo.status ? 'line-through text-gray-500' : ''
                                    }`}
                                onClick={() => handleToggleTodo(todo.id)}
                            >
                                {todo.description}
                            </span>
                            <button
                                type="button"
                                className="text-red-500 hover:text-red-700"
                                onClick={() => handleDeleteTodo(todo.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoView
