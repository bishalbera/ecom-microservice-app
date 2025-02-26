import { Module } from "@nestjs/common";
import { ClientsModule } from "@nestjs/microservices";
import { UserController } from "../controllers/user.controller";
import { userServiceClientOptions } from "../grpc-clients/user.client";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "USER_PACKAGE",
        ...userServiceClientOptions,
      },
    ]),
  ],
  controllers: [UserController],
})
export class UserModule {}
