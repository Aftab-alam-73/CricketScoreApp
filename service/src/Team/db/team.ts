import { db } from "src/utility/dbconnector";
import { teamDto } from "../dto";
import { ITeamDatabaseConnector } from "../interface/team";
import { Injectable } from "@nestjs/common";


@Injectable()
export class TeamDatabaseConnector implements ITeamDatabaseConnector {
   async create(payload: teamDto): Promise<any> {
        const newTeam=await db.team.create({data: payload});
        return newTeam;
    }
}