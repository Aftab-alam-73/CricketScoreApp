import { Body, Controller, Post } from "@nestjs/common";
import { matchDto } from "../dto";
import { MatchService } from "../services";

@Controller({path:"/match"})
export class MatchController{

    constructor(private matchService: MatchService){}
    @Post("/")
   async create(@Body() payload:matchDto): Promise<any>{
    try{
        const result=await this.matchService.createMatch(payload);
        return result;
    }catch(err:any){
      return  err.message;
    }
   }
}