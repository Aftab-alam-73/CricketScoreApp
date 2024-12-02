import { Delivery } from "@prisma/client";
import { IDeliveryDatabaseConnector } from "../interface";
import { db } from "src/utility/dbconnector";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeliveryDatabaseConnector implements IDeliveryDatabaseConnector{
   async create(payload: Delivery): Promise<any> {
        const newDelivery=await db.delivery.create({data:payload});
        return newDelivery;
    }
}