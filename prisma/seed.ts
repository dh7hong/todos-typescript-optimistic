import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const todos = [
  {
    id: 1,
    content: "Walk dog outside",
  },
  {
    id: 2,
    content: "Study for exam",
  },
  {
    id: 3,
    content: "Cook dinner",
  },
];

// async function main() {
//   console.log(`Start seeding ...`);

//   for (const todo of todos) {
//     const result = await prisma.todo.upsert({
//       where: { id: todo.id },
//       update: {},
//       create: todo,
//     });
//     console.log(`Created event with id: ${result.id}`);
//   }

//   console.log(`Seeding finished.`);
// }

async function main() {
  console.log(`Start seeding ...`);
  await Promise.all(
    todos.map(todo => 
      prisma.todo.create({ data: todo })
    )
  );
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });