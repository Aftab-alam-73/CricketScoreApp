import { Player } from "@prisma/client";
import { statsDto } from "../dto";


export interface IPlayerDatabaseConnector{
    create(payload:Player):Promise<any>;
    update(playerId:string,playload:statsDto):Promise<any>;
}