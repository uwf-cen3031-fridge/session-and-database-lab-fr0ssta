import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

export class UserService {

  private prisma: PrismaClient;
  cunstructor() {
    this.prisma = new PrismaClient();
  }

  function createUser(username: string, email: string, password: string){
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });
    return user;
    
  }

  function authenticateUser(username: string, password: string) {

  }

}