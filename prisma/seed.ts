import { PrismaClient } from "@prisma/client";
import { seed as seedTeamRoles } from "./seed/team-roles";

const prisma = new PrismaClient();

async function main() {
  await seedTeamRoles(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
