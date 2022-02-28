import { Module } from '@nestjs/common';
import { ArmyGestModule } from './army-gest/army-gest.module';

@Module({
  imports: [ArmyGestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
