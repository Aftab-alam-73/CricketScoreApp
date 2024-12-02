import { Module } from "@nestjs/common";
import { DeliveryService } from "./services/delivery";
import { DeliveryDatabaseConnector } from "./db/delivery";
import { DeliveryController } from "./controllers";

@Module({
    controllers:[DeliveryController],
    providers:[DeliveryService,DeliveryDatabaseConnector]
})
export class DeliveryModule{}