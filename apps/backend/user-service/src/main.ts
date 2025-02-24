import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { UserModule } from "./user.module";
import { join } from "path";
const bootstrap = async () => {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.GRPC,
      options: {
        package: "user",
        protoPath: join(__dirname, "../proto/user.proto"),
      },
    }
  );
  await app.listen();
  console.log("User Service is running .....");
};

bootstrap();
