import { matchDto } from "../dto";

export interface IMatchDatabaseConnector {
    create(payload:matchDto):Promise<any>;

}