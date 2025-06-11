import React, { useState } from "react";
import Todo from "./Todo";
import { FaPlus, FaClipboardList } from "react-icons/fa";

type Todos = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoApp = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  };

  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <FaClipboardList className="text-2xl text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Daily Tasks
          </h1>
          <p className="text-white/70 text-sm sm:text-base">
            Stay organized and productive
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Input Section */}
          <div className="p-6 sm:p-8 border-b border-white/10">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  type="text"
                  placeholder="What needs to be done?"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                />
              </div>
              <button
                onClick={addTodo}
                disabled={!input.trim()}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 min-w-[120px]"
              >
                <FaPlus className="text-sm" />
                Add Task
              </button>
            </div>
          </div>

          {/* Stats Section */}
          {totalCount > 0 && (
            <div className="px-6 sm:px-8 py-4 bg-white/5 border-b border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="text-white/70 text-sm">
                  {completedCount} of {totalCount} tasks completed
                </div>
                <div className="w-full sm:w-48 bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: totalCount > 0 ? `${(completedCount / totalCount) * 100}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Todos Section */}
          <div className="p-6 sm:p-8">
            {todos.length > 0 ? (
              <div className="space-y-3">
                {todos.map((todo, index) => (
                  <div
                    key={todo.id}
                    className="animate-in slide-in-from-top duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Todo
                      todo={todo}
                      completeTodo={completeTodo}
                      deleteTodo={deleteTodo}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                  <FaClipboardList className="text-2xl text-white/50" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No tasks yet
                </h3>
                <p className="text-white/60 text-sm sm:text-base">
                  Add your first task to get started!
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-white/50 text-xs sm:text-sm">
            Press Enter to quickly add tasks
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
