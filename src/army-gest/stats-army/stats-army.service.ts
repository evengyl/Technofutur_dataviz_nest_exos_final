import { Injectable } from '@nestjs/common';
import * as SoldatsDatas from "../datas/Soldats.json"
import * as ArmesDatas from '../datas/Armes.json'
import * as ArtilleriesDatas from '../datas/Artilleries.json'
import { Soldats } from 'src/models/entities/Soldats.model';
import { Armes } from 'src/models/entities/Armes.model';


@Injectable()
export class StatsArmyService {

    private listSoldats : Soldats[]
    private listArmes : Armes
    private listArtilleries : any[]

    constructor(){
        this.listSoldats = SoldatsDatas
        this.listArmes = ArmesDatas
        //this.listArtilleries = ArtilleriesDatas
    }


    getStatsSoldatsArmes() : { [key :string] : string}
    {
        let qtySoldat = this.listSoldats.length
        let qtyArmes = this.listArmes.quantity

        if(qtyArmes >= qtySoldat)
            return { "Message" : `Le nombre d'armes est suffisant pour l'ensemble des soldats : ${qtyArmes} armes pour ${qtySoldat} soldats`}
        else
            return { "Message" : `Il est temps de demander à l'OTAN d'envoyer des armes... il manque ${(qtyArmes-qtySoldat)*-1} armes`}
    }


    getConstruyctUnity() : Soldats[]
    {
        let listSoldatsTemp : Soldats[] = this.listSoldats
        let decoupage : number = 5
        let unityTotal : number = Math.ceil(this.listSoldats.length / decoupage)
        let unity : any[] = []

        for(let i = 0; i < unityTotal; i++)
        {
            unity.push(listSoldatsTemp.splice(0,decoupage))
        }
        return unity
    }
}
