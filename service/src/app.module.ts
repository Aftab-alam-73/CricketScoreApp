import { Module } from '@nestjs/common';
import { MatchModule } from './Match';
import { TeamModule } from './Team/module';
import { PlayerModule } from './Player';
import { DeliveryModule } from './Delivery';

@Module({
  imports: [MatchModule,TeamModule,PlayerModule,DeliveryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
