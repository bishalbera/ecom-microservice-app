import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";
export const userServiceClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: "user",
    protoPath: join(__dirname, "../../proto/user.proto"),
  },
};
