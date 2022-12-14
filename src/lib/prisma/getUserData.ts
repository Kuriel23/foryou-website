import { prisma } from './getPrisma';
import { UserData, type UserDataToObject } from './structures/UserData';

export async function getUserData(
  id: string,
): Promise<UserDataToObject | null> {
  const data = await prisma.users.findFirst({
    where: { id },
  });

  if (!data) {
    return null;
  }

  const userDataStructure = new UserData(data);

  const userData = await userDataStructure.toObject();

  return userData;
}
