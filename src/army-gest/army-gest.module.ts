import { Module } from '@nestjs/common';
import { ArmesController } from './armes/armes.controller';
import { ArmesService } from './armes/armes.service';
import { ArtilleriesController } from './artilleries/artilleries.controller';
import { ArtilleriesService } from './artilleries/artilleries.service';
import { SoldatsController } from './soldats/soldats.controller';
import { SoldatsService } from './soldats/soldats.service';
import { StatsArmyController } from './stats-army/stats-army.controller';
import { StatsArmyService } from './stats-army/stats-army.service';

@Module({
    controllers : [ArmesController, SoldatsController, ArtilleriesController, StatsArmyController],
    providers : [ArmesService, SoldatsService, ArtilleriesService, StatsArmyService]
})
export class ArmyGestModule {}
