
export interface playerDto{
   name: string;
   role:string;
   teamId: string;
   battingStats?: BattingStats;
   bowlingStats?: BowlingStats;
}
// export interface BattingStats{
//   runs:number;
//   ballsFaced: number;
//   fours: number;
//   sixes: number;
//   strikeRate: number;
// }
// export interface BowlingStats{
//     overs: number;
//     maidens: number;
//     wickets: number;
//     runsConceded: number;
//     economyRate: number;
// }

  

  
export interface statsDto{
 battingStats?: BattingStats;
 bowlingStats?:BowlingStats;
}
export interface BattingStats{
  runs: number;
  ballsFaced: number;
  fours: number;
  sixes: number;
}
export interface BowlingStats{
  overs: number;
  maidens: number;
  runsConceded: number;
  wickets:number;
  noBalls: number;
  wideBalls: number;
}