import { Module } from "@nestjs/common";
import { MatchController } from "./controllers";
import { MatchService } from "./services";
import { MatchDatabaseConnector } from "./db";

@Module({
    controllers:[MatchController],
    providers:[MatchService,MatchDatabaseConnector]
})
export class MatchModule{}