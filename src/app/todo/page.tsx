"use client";

import { useState } from "react";

export default function TodoPage() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  // intentional lint error: unused variable
  const unusedVariable = "this should trigger eslint";

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">TODO App</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          className="border rounded px-3 py-2 flex-1"
          placeholder="Add a todo..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, i) => (
          <li key={i} className="p-2 bg-gray-100 rounded">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
