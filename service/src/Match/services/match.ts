import { Injectable } from "@nestjs/common";
import { MatchDatabaseConnector } from "../db";
import { matchDto } from "../dto";


@Injectable()
export class MatchService {
 
    constructor(private matchRepo:MatchDatabaseConnector){}
   
    async createMatch(payload: matchDto): Promise<any> {
        const result= this.matchRepo.create(payload);
        return result;
    }
}