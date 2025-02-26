import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Post,
  Param,
  Query,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { ClientGrpc } from "@nestjs/microservices";

interface UserService {
  getUserById(data: { id: string }): Observable<any>;
  getUserByEmail(data: { email: string }): Observable<any>;
  createUser(data: {
    email: string;
    name: string;
    password: string;
  }): Observable<any>;
}

@Controller("users")
export class UserController implements OnModuleInit {
  private userService: UserService;

  constructor(@Inject("USER_PACKAGE") private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>("UserService");
  }

  @Post()
  createUser(@Body() body: { email: string; name: string; password: string }) {
    return this.userService.createUser(body);
  }

  @Get()
  getUserByEmail(@Query("email") email: string) {
    return this.userService.getUserByEmail({ email });
  }

  @Get(":id")
  getUserById(@Param("id") id: string) {
    return this.userService.getUserById({ id });
  }
}
