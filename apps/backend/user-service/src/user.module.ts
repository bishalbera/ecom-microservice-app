import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entilty";
import { UserRepository } from "./repositories/user.repository";
import { UserService } from "./services/user.service";
import { UserGrpcService } from "./grpc/user.grpc";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserRepository, UserService, UserGrpcService]
})

export class UserModule {}