import { Injectable } from "@nestjs/common";
import { IMatchDatabaseConnector } from "../interface";
import { matchDto } from "../dto";
import { db } from "src/utility/dbconnector";

@Injectable()
export class MatchDatabaseConnector implements IMatchDatabaseConnector{
   async create(payload:matchDto): Promise<any> {
        try{
            const newMatch=await db.match.create({data:payload});
            return newMatch;    
        }catch(err:any){
            throw new Error(`Failed to create match: ${err.message}`);
        }
    }

}