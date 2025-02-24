import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/repositories/user.repository";
import * as bcrypt from "bcrypt";
@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}
  async createUser(email: string, name: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userRepo.createUser(email, name, hashedPassword);
  }
  async getUserById(id: string) {
    return this.userRepo.findUserById(id);
  }
  async getUserByEmail(email: string) {
    return this.userRepo.findUserByEmail(email);
  }
}
