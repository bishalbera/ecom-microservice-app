import { Injectable } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { GrpcMethod } from "@nestjs/microservices";

@Injectable()
export class UserGrpcService {
  constructor(private readonly UserService: UserService) {}

  @GrpcMethod("UserService", "CreateUser")
  async createUser(data: { email: string; name: string; password: string }) {
    const user = await this.UserService.createUser(
      data.email,
      data.name,
      data.password
    );
    return { id: user.id, name: user.name, email: user.email };
  }

  @GrpcMethod("UserService", "GetUserById")
  async getUserById(data: { id: string }) {
    const user = await this.UserService.getUserById(data.id);
    return user ? { id: user.id, name: user.name, email: user.email } : null;
  }

  @GrpcMethod("UserService", "GetUserByEmail")
  async getUserByEmail(data: { email: string }) {
    const user = await this.UserService.getUserByEmail(data.email);
    return user ? { id: user.id, name: user.name, email: user.email } : null;
  }
}
