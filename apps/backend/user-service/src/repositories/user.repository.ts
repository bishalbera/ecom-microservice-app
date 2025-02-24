import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entilty";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async createUser(
    email: string,
    name: string,
    hashedPassword: string
  ): Promise<User> {
    const user = this.repo.create({ email, name, password: hashedPassword });
    return this.repo.save(user);
  }
  async findUserById(id: string): Promise<User | null> {
    return this.repo.findOne({ where: { id } });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.repo.findOne({ where: { email } });
  }
}
