import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ArtilleriesDTO } from 'src/models/dto/Artilleries.dto';
import { Artilleries } from 'src/models/entities/Artilleries.model';
import { ArtilleriesService } from './artilleries.service';

@Controller('api/artilleries')
export class ArtilleriesController {

    constructor(private artServ : ArtilleriesService){}
    
    @Get()
    getAll()
    {
        return this.artServ.getAll()
    }


    @Post()
    createArti(@Body() newArt : ArtilleriesDTO) : Artilleries
    {
        return this.artServ.createArti(newArt)
    }

    @Delete(":id")
    deleteArti(@Param("id") id : number) : Artilleries
    {
        return this.artServ.deleteArti(id)
    }

}
