import { Injectable } from '@nestjs/common';
import { last, NotFoundError } from 'rxjs';
import { ArtilleriesDTO } from 'src/models/dto/Artilleries.dto';
import { Artilleries } from 'src/models/entities/Artilleries.model';
import * as ArtilleriesDatas from '../datas/Artilleries.json'

@Injectable()
export class ArtilleriesService {

    private listArtilleries : Artilleries[]
    
    constructor() {
        this.listArtilleries = ArtilleriesDatas
    }

    getAll() : Artilleries[]
    {
        return this.listArtilleries
    }

    createArti(newArt : ArtilleriesDTO) : Artilleries
    {
        let lastId = this.listArtilleries[this.listArtilleries.length-1].id

        let art = new Artilleries
        art.id = lastId+1
        art.plaque = newArt.plaque
        art.puissanceMT = newArt.puissanceMT

        this.listArtilleries.push(art)
        return art
    }


    deleteArti(id : number) : Artilleries
    {
        let artiIndex = this.listArtilleries.findIndex(arti => arti.id == id)
        if(artiIndex > 0)
        {
            let art = this.listArtilleries.find(arti => arti.id == id)
            this.listArtilleries.splice(artiIndex, 1)
            return art
        }

        throw new NotFoundError("Cette Artilleries n'existe pas...")
    }
}
