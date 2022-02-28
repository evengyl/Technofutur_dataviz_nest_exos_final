import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SoldatsDTO } from 'src/models/dto/Soldats.dto';
import { Soldats } from 'src/models/entities/Soldats.model';
import { SoldatsService } from './soldats.service';

@Controller('api/soldats')
export class SoldatsController {

    constructor(private soldatsServ : SoldatsService){}

    @Get()
    getAll() : Soldats[]
    {
        return this.soldatsServ.getAll()
    }


    @Post()
    newSoldats(@Body() newSoldat : SoldatsDTO) : Soldats
    {
        return this.soldatsServ.newSoldat(newSoldat)
    }

    @Delete(":matricule")
    deathSoldats(@Param("matricule") matricule : number)
    {
        return this.soldatsServ.deleteSoldat(matricule)
    }



    


    



}
