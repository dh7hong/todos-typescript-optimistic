"use client";

import { addTodo } from "@/actions/actions";
import { useOptimistic, useRef } from "react";
import Button from "./button";

type Todo = {
  id: number;
  content: string;
};

type TodosComponentProps = {
  todos: Todo[];
};

export default function TodosComponent({
  todos,
}: TodosComponentProps) {
  const ref = useRef<HTMLFormElement>(null);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => {
      return [...state, newTodo];
    }
  );
  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          addOptimisticTodo({
            id: Math.random(),
            content: formData.get("content") as string,
          });
          await addTodo(formData);
        }}
        className="flex flex-col w-[300px] my-16"
      >
        <input
          type="text"
          name="content"
          className="px-4 py-2 mb-3"
          placeholder="Write your todo..."
          required
        />
        <Button />
      </form>
      <ul className="list-disc">
        {optimisticTodos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </>
  );
}
