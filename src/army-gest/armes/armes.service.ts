import { Injectable } from '@nestjs/common';
import { Armes } from 'src/models/entities/Armes.model';
import * as ArmesDatas from '../datas/Armes.json'


@Injectable()
export class ArmesService {

    private listArmes : Armes

    constructor(){
        this.listArmes = ArmesDatas
    }

    getAll() : Armes
    {
        return this.listArmes
    }

    updateValid(qty : number) : Armes
    {
        this.listArmes.valid += (qty >= 1) ? qty : 0

        return this.listArmes
    }

    updateDestroy(qty : number) : Armes
    {
        this.listArmes.destroy += (qty >= 1) ? qty : 0
        this.listArmes.valid -= (qty >= 1) ? qty : 0

        return this.listArmes
    }

    updateInRepair(qty : number) : Armes
    {
        this.listArmes.inRepair += (qty >= 1) ? qty : 0
        this.listArmes.valid -= (qty >= 1) ? qty : 0

        return this.listArmes
    }
}
