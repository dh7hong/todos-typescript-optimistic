"use server";

import { prisma } from "@/db/db";
import { revalidatePath } from "next/cache";

export const addTodo = async (formData: FormData) => {
  const content = formData.get("content"); // Convert the string back to a boolean

  try {
    await prisma.todo.create({
      data: {
        content: content as string, // Use the boolean value here
      },
    });
  } catch (e) {
    
  }
  revalidatePath("/todos");
};
