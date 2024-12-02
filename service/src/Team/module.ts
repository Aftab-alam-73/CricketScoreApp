import { Module } from "@nestjs/common";
import { TeamController } from "./controllers";
import { TeamService } from "./services";
import { TeamDatabaseConnector } from "./db";

@Module({
    controllers: [TeamController],
    providers: [TeamService,TeamDatabaseConnector],
    exports: []
})
export class TeamModule{

}