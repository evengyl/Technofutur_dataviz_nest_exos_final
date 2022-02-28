import { Controller, Get } from '@nestjs/common';
import { Soldats } from 'src/models/entities/Soldats.model';
import { StatsArmyService } from './stats-army.service';

@Controller('api/statsArmy')
export class StatsArmyController {

    constructor(private statsServ : StatsArmyService){}

    @Get("soldats_armes")
    getStatsSoldatsArmes() : { [key :string] : string}
    {
        return this.statsServ.getStatsSoldatsArmes()
    }

    @Get("unity")
    getConstruyctUnity() : Soldats[]
    {
        return this.statsServ.getConstruyctUnity()
    }
}
