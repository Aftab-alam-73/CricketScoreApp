import { Injectable } from "@nestjs/common";
import { teamDto } from "../dto";
import { TeamDatabaseConnector } from "../db";

@Injectable()
export class TeamService{
    
    constructor(private teamRepo:TeamDatabaseConnector) {}

    async createTeam(payload:teamDto):Promise<any>{
        const result=await this.teamRepo.create(payload);
        return result;
    }
}