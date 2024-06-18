const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    const tasks = await prisma.task.findMany();
    console.log('Fetched tasks:', tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error('Main error:', error);
});
