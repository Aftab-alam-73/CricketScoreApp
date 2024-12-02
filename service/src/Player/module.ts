import { Module } from "@nestjs/common";
import { PlayerService } from "./services";
import {PlayerController} from "./controllers";
import { PlayerDatabaseConnector } from "./db";

@Module({
    imports: [],
    controllers: [PlayerController],
    providers: [PlayerService,PlayerDatabaseConnector],
    exports: []
})
export class PlayerModule{}