import { prisma } from "@/db/db";
import TodosComponent from "@/src/app/components/todos-component";

export default async function TodosPage() {
  const todos = await prisma.todo.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center w-full p-24">
      <h1 className="text-2xl font-bold">Todos Page</h1>

      <TodosComponent todos={todos}/>

      
    </main>
  );
}
