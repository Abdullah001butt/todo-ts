// import React from "react";
import { FaCheck, FaTrash, FaUndo } from "react-icons/fa";

type TodoProps = {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const Todo = ({ todo, completeTodo, deleteTodo }: TodoProps) => {
  return (
    <div className={`group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 transition-all duration-200 hover:bg-white/15 hover:border-white/30 ${
      todo.completed ? 'opacity-75' : ''
    }`}>
      <div className="flex items-center gap-4">
        <button
          onClick={() => completeTodo(todo.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            todo.completed
              ? 'bg-gradient-to-r from-green-400 to-blue-500 border-transparent'
              : 'border-white/40 hover:border-white/60'
          }`}
        >
          {todo.completed && <FaCheck className="text-white text-xs" />}
        </button>

        <div className="flex-1 min-w-0">
          <p className={`text-white transition-all duration-200 break-words ${
            todo.completed 
              ? 'line-through text-white/60' 
              : 'text-white'
          }`}>
            {todo.text}
          </p>
        </div>

        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => completeTodo(todo.id)}
            className={`p-2 rounded-lg transition-all duration-200 ${
              todo.completed
                ? 'text-yellow-400 hover:bg-yellow-400/20'
                : 'text-green-400 hover:bg-green-400/20'
            }`}
            title={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {todo.completed ? <FaUndo className="text-sm" /> : <FaCheck className="text-sm" />}
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="p-2 rounded-lg text-red-400 hover:bg-red-400/20 transition-all duration-200"
            title="Delete task"
          >
            <FaTrash className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
