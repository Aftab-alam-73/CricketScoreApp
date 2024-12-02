import { Delivery } from "@prisma/client";

export interface IDeliveryDatabaseConnector{
    create(payload:Delivery):Promise<any>;
}