import { Body, Controller, Post } from "@nestjs/common";
import { TeamService } from "../services";
import { teamDto } from "../dto";

@Controller({path:"/team"})
export class TeamController{

    constructor(private teamService: TeamService){}

    @Post("/")
    async create(@Body() payload:teamDto):Promise<any>{
       try{
           const result=await this.teamService.createTeam(payload);
           return result;
       }catch(err:any){
         return `Something went wrong while creating team, err:${err.message}`;
       }
    }
}