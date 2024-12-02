import { Body, Controller, Post } from "@nestjs/common";
import { Player } from "@prisma/client";
import { PlayerService } from "../services";

@Controller({path:"/player"})
export class PlayerController {

    constructor(private playerService: PlayerService){}
    @Post("/")
    async create(@Body() payload:Player):Promise<any> {
        try{

            const result=await this.playerService.createPlayer(payload);
            return result;
        }catch(err:any){
          return `Something went wrong while creating palyer,err:${err.message}`
        }
    }
}