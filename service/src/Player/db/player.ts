import { Injectable } from "@nestjs/common";
import { BattingStats, BowlingStats, statsDto } from "../dto";
import { IPlayerDatabaseConnector } from "../interface";
import { db } from "src/utility/dbconnector";
import { Player } from "@prisma/client";

@Injectable()
export class PlayerDatabaseConnector implements IPlayerDatabaseConnector{
 async create(payload:Player):Promise<any>{
    const newPlayer=await db.player.create({data:payload});
    return newPlayer;
  }
  async update(playerId: string, payload: statsDto): Promise<any> {
    const { battingStats, bowlingStats } = payload;
 
    const player = await db.player.findUnique({
      where: { id: playerId },
      select: {
        battingStats: true,
        bowlingStats: true,
      },
    })
    if (!player) {
      throw new Error("Player not found");
    }
 
     // Cast JSON fields to their appropriate types
     const currentBattingStats = player.battingStats as BattingStats;
     const currentBowlingStats = player.bowlingStats as BowlingStats;
    //  currentBowlingStats.
     const updatedData: any = {};
 
     // Update batting stats
     if (battingStats) {
       const updatedBattingStats: BattingStats = {
         ...currentBattingStats, // Merge with existing stats
         runs: (currentBattingStats?.runs || 0) + (battingStats.runs || 0),
         ballsFaced: (currentBattingStats?.ballsFaced || 0) + (battingStats.ballsFaced || 0),
         fours: (currentBattingStats?.fours || 0) + (battingStats.fours || 0),
         sixes: (currentBattingStats?.sixes || 0) + (battingStats.sixes || 0),
       };
 
       updatedData.battingStats = updatedBattingStats;
     }
 
     // Update bowling stats
     if (bowlingStats) {
       const updatedBowlingStats: BowlingStats = {
         ...currentBowlingStats, // Merge with existing stats
         overs: (currentBowlingStats?.overs || 0) + (bowlingStats.overs || 0),
         maidens: (currentBowlingStats?.maidens || 0) + (bowlingStats.maidens || 0),
         runsConceded: (currentBowlingStats?.runsConceded || 0) + (bowlingStats.runsConceded || 0),
         wickets: (currentBowlingStats?.wickets || 0) + (bowlingStats.wickets || 0),
         noBalls: (currentBowlingStats?.noBalls || 0) + (bowlingStats.noBalls || 0),
         wideBalls: (currentBowlingStats?.wideBalls || 0) + (bowlingStats.wideBalls || 0),
       };
 
       updatedData.bowlingStats = updatedBowlingStats;
     }
 
     // Perform the update
     const updatedPlayer = await db.player.update({
       where: { id: playerId },
       data: {
         battingStats: updatedData.battingStats ? { set: updatedData.battingStats } : undefined,
         bowlingStats: updatedData.bowlingStats ? { set: updatedData.bowlingStats } : undefined,
       },
     });
 
     return {
       message: "Player stats updated successfully",
       player: updatedPlayer,
     };
    
     
  }
}