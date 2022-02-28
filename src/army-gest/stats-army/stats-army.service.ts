import { Injectable } from '@nestjs/common';
import * as SoldatsDatas from "../datas/Soldats.json"
import * as ArmesDatas from '../datas/Armes.json'
import * as ArtilleriesDatas from '../datas/Artilleries.json'
import { Soldats } from 'src/models/entities/Soldats.model';
import { Armes } from 'src/models/entities/Armes.model';
import { Unity } from 'src/models/entities/Unity.model';
import { Artilleries } from 'src/models/entities/Artilleries.model';


@Injectable()
export class StatsArmyService {

    private listSoldats : Soldats[]
    private listArmes : Armes
    private listArtilleries : Artilleries[]

    constructor(){
        this.listSoldats = SoldatsDatas
        this.listArmes = ArmesDatas
        this.listArtilleries = ArtilleriesDatas
    }


    getStatsSoldatsArmes() : { [key :string] : string}
    {
        let qtySoldat = this.listSoldats.length
        let qtyArmes = this.listArmes.valid

        if(qtyArmes >= qtySoldat)
            return { "Message" : `Le nombre d'armes est suffisant pour l'ensemble des soldats : ${qtyArmes} armes pour ${qtySoldat} soldats`}
        else
            return { "Message" : `Il est temps de demander à l'OTAN d'envoyer des armes... il manque ${(qtyArmes-qtySoldat)*-1} armes`}
    }


    getConstructUnity() : Unity[]
    {
        let listSoldatsTemp : Soldats[] = this.listSoldats
        let listArtilleriesTemp : Artilleries[] = this.listArtilleries
        let unityTotal : number = Math.ceil(this.listSoldats.length / 5)
        let unities : Unity[] = []
        
        for(var i = 0; i < unityTotal; i++)
        {
            let unity : Unity = new Unity

            if(listSoldatsTemp.length >= 5)
                unity.soldatsArti = listSoldatsTemp.splice(0,2)

            unity.soldatsFoot = listSoldatsTemp.splice(0,3)
            unity.artillerie = listArtilleriesTemp.splice(0,1)[0]

            unities.push(unity)

            if(i == unityTotal-1){
                return unities
            }
        }
    }
}
