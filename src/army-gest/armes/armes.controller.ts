import { Body, Controller, Get, Patch } from '@nestjs/common';
import { Armes } from 'src/models/entities/Armes.model';
import { ArmesService } from './armes.service';

@Controller('api/armes')
export class ArmesController {

    constructor(private armesServ : ArmesService){}

    @Get()
    getAll() : Armes
    {
        return this.armesServ.getAll()
    }

    @Patch("updateValid")
    updateValid(@Body("qty") qty : number)
    {
        return this.armesServ.updateValid(qty)
    }

    @Patch("updateDestroy")
    updateDestroy(@Body("qty") qty : number)
    {
        return this.armesServ.updateDestroy(qty)
    }

    @Patch("updateInRepair")
    updateInRepair(@Body("qty") qty : number)
    {
        return this.armesServ.updateInRepair(qty)
    }
}
