import { Delivery } from "@prisma/client";
import { DeliveryDatabaseConnector } from "../db/delivery";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeliveryService{
    constructor(private deliveryRepo:DeliveryDatabaseConnector) {}

    async createDelivery(payload:Delivery):Promise<any> {
        const result=await this.deliveryRepo.create(payload);
        return result;

    }
}