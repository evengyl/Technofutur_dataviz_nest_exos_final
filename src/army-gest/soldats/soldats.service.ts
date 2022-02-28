import { Injectable, NotFoundException } from '@nestjs/common';
import { SoldatsDTO } from 'src/models/dto/Soldats.dto';
import { Soldats } from 'src/models/entities/Soldats.model';
import * as SoldatsDatas from '../datas/Soldats.json'

@Injectable()
export class SoldatsService {

    listSoldats : Soldats[]

    constructor(){
        this.listSoldats = SoldatsDatas
    }

    getAll() : Soldats[]
    {   
        return this.listSoldats
    }

    newSoldat(newSoldat : SoldatsDTO) : Soldats
    {
        let lastMatricule = this.listSoldats[this.listSoldats.length-1].matricule

        let soldat = new Soldats
        soldat.matricule = lastMatricule+1
        soldat.name = newSoldat.name

        this.listSoldats.push(soldat)
        return soldat
    }


    deleteSoldat(matricule : number) : Soldats
    {
        let soldatIndex = this.listSoldats.findIndex(soldat => soldat.matricule == matricule)
        if(soldatIndex > 0)
        {
            let soldat = this.listSoldats.find(soldat => soldat.matricule == matricule)
            this.listSoldats.splice(soldatIndex, 1)
            return soldat
        }

        throw new NotFoundException("Ce matricule n'existe pas...")
    }
}
