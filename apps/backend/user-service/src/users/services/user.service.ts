import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  
  createUser(createUserDto: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: createUserDto });
    
  }

  findUserById(id: string) {
    return this.prisma.user.findUnique({where: {id}});
  }

  findUserByEmail(email: string) {
    return this.prisma.user.findUnique({where: {email}});
  }
}
