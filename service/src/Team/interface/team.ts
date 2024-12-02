import { teamDto } from "../dto";


export interface ITeamDatabaseConnector{
    create(payload: teamDto): Promise<any>;
}