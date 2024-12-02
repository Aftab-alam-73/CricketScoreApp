import { Injectable } from "@nestjs/common";
import { PlayerDatabaseConnector } from "../db";
import { Player } from "@prisma/client";

@Injectable()
export class PlayerService{
   constructor(private playerRepo:PlayerDatabaseConnector){}

   async createPlayer(payload:Player):Promise<any>{
    const result=await this.playerRepo.create(payload);
    return result;
   }
}