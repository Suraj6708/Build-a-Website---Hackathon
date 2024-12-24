import React, { useState, useEffect } from "react";
import {
  PlusCircle,
  Trash2,
  CheckCircle,
  Edit2,
  X,
  Save,
  GripVertical,
} from "lucide-react";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedOverItem, setDraggedOverItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const newTodoItem = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos([newTodoItem, ...todos]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    if (!editText.trim()) return;

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo
      )
    );
    setEditingId(null);
    setEditText("");
  };

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.currentTarget.classList.add("opacity-50");
  };

  const handleDragEnd = (e) => {
    setDraggedItem(null);
    e.currentTarget.classList.remove("opacity-50");
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDraggedOverItem(index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();

    if (draggedItem === null) return;

    const newTodos = [...todos];
    const draggedItemContent = newTodos[draggedItem];
    newTodos.splice(draggedItem, 1);
    newTodos.splice(index, 0, draggedItemContent);

    setTodos(newTodos);
    setDraggedItem(null);
    setDraggedOverItem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-900 py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 md:p-6 shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            Task Manager
          </h1>

          {/* Add Todo Form */}
          <form onSubmit={addTodo} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-2 rounded-lg bg-white bg-opacity-20 
                         text-black border border-blue-300 
                         focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg 
                         hover:bg-blue-700 transition-colors duration-200
                         disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center gap-2"
              >
                <PlusCircle className="w-5 h-5" />
                <span className="hidden md:inline">Add</span>
              </button>
            </div>
          </form>

          {/* Todo List */}
          <div className="space-y-3">
            {todos.length === 0 ? (
              <div className="text-center text-blue-400 py-6">
                No tasks yet. Add one above!
              </div>
            ) : (
              todos.map((todo, index) => (
                <div
                  key={todo.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragEnd={handleDragEnd}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                  className={`flex items-center gap-2 p-3 md:p-4 bg-white bg-opacity-20 
                           rounded-lg border border-blue-300 border-opacity-20
                           transition-all duration-200 hover:bg-opacity-25
                           ${
                             draggedOverItem === index
                               ? "border-blue-400 border-2"
                               : ""
                           }
                           cursor-move`}
                >
                  <div className="text-blue-400 cursor-move">
                    <GripVertical className="w-5 h-5" />
                  </div>

                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`flex-shrink-0 ${
                      todo.completed ? "text-green-400" : "text-blue-400"
                    } hover:scale-110 transition-transform duration-200`}
                  >
                    <CheckCircle className="w-6 h-6" />
                  </button>

                  {editingId === todo.id ? (
                    <div className="flex-1 flex gap-2">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="flex-1 px-3 py-1 bg-white bg-opacity-20 
                                 rounded border border-blue-300 text-black
                                 focus:outline-none focus:border-blue-400"
                        autoFocus
                      />
                      <button
                        onClick={() => updateTodo(todo.id)}
                        className="text-green-400 hover:text-green-300
                                 hover:scale-110 transition-all duration-200"
                      >
                        <Save className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="text-red-400 hover:text-red-300
                                 hover:scale-110 transition-all duration-200"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <span
                        className={`flex-1 text-black break-words ${
                          todo.completed ? "line-through opacity-60" : ""
                        }`}
                      >
                        {todo.text}
                      </span>
                      <div className="flex gap-1 md:gap-2">
                        <button
                          onClick={() => {
                            setEditingId(todo.id);
                            setEditText(todo.text);
                          }}
                          className="text-blue-400 hover:text-blue-100
                                   hover:scale-110 transition-all duration-200"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => deleteTodo(todo.id)}
                          className="text-red-400 hover:text-red-300
                                   hover:scale-110 transition-all duration-200"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Todo Count */}
          {todos.length > 0 && (
            <div className="mt-6 text-center text-blue-200 text-sm">
              {todos.filter((todo) => todo.completed).length} of {todos.length}{" "}
              tasks completed
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
