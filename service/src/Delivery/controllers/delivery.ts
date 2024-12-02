import { Body, Controller, Post } from "@nestjs/common";
import { DeliveryService } from "../services/delivery";
import { Delivery } from "@prisma/client";

@Controller({path:"/delivery"})
export class DeliveryController{

    constructor(private deliveryService: DeliveryService){}

  @Post("/")
  async  create(@Body() payload:Delivery):Promise<any>{
    try{
        const result=await this.deliveryService.createDelivery(payload);
        return result;
    }catch(err:any){
        return `Something went wrong while creating the delivery, error: ${err.message}`;
    }
  }
}