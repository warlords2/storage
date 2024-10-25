let dotenv  = require('dotenv');
dotenv.config({path:'./.env'});

import { BaseEntity, DataSource, FindOneOptions, Repository } from "typeorm";
import { buildDatabase, ConectionParameter}  from "./database";

export { DataSource } from "typeorm";

// User and Authentication
export { User } from "./entities/user";
export { Login } from "./entities/auth/login";
export { LoginType } from "./entities/auth/loginType";

// Game Entities
export { World } from "./entities/game/world";
export { Resource } from "./entities/game/resource";
export { Province } from "./entities/game/province";
export { Player } from "./entities/game/player";
export { Npc } from "./entities/game/npc";
export { Market } from "./entities/game/market";
export { City } from "./entities/game/city";
export { Building } from "./entities/game/building";
export { BuildingType } from "./entities/game/buildingType";
export { Unit } from "./entities/game/unit";
export { UnitType } from "./entities/game/unitType";
export { ResourceType } from "./entities/game/resourceType";

// Game Geometry
export { Position } from "./entities/game/geometry/position";
export { Size } from "./entities/game/geometry/size";

// Game Market
export { Offer } from "./entities/game/market/offer";
export { Sale } from "./entities/game/market/sale";

// Game Costs
export { Cost } from "./entities/game/cost";

// Game Configuration
export { WorldConfig } from "./entities/game/configure/worldConfig";
export { BuildingConfig } from "./entities/game/configure/buildingConfig";
export { CityConfig } from "./entities/game/configure/cityConfig";
export { MarketConfig } from "./entities/game/configure/marketConfig";
export { NPCConfig } from "./entities/game/configure/npcConfig";
export { NPCTypeConfig } from "./entities/game/configure/npcTypeConfig";
export { PlayerConfig } from "./entities/game/configure/playerConfig";
export { ProvinceConfig } from "./entities/game/configure/provinceConfig";
export { ResourceConfig } from "./entities/game/configure/resourceConfig";
export { UnitConfig } from "./entities/game/configure/unitConfig";

// Open connection postgress function
let openConnection = (async ( param: ConectionParameter = undefined)=>{

    if(param == undefined)return await buildDatabase();
    else return await buildDatabase(param);
    
});

declare module globalThis {    let database: IDatabase;}
interface IDatabase {    dataSource:DataSource; }

export class ManagerDatabase{
    
    dataSource:DataSource;
    paramDataSource: ConectionParameter;

    constructor(param: ConectionParameter = undefined){
        
        // Skeleton
        if(typeof globalThis.database == 'undefined'){
            openConnection(param).then((datasource: DataSource)=>{
                globalThis.database = {
                    dataSource: datasource
                };
                this.dataSource = globalThis.database.dataSource;
            }).catch(err=>{
                console.log("Error in connection :");
                console.error(err);
            })
            
        } else this.dataSource = globalThis.database.dataSource;

        this.paramDataSource = param;
        
    }

    public getConnection(){
        let ctx = this;
        return new Promise<DataSource>((resolve,reject)=>{
            if(ctx.dataSource?.isInitialized){
                
                return resolve( this.dataSource  );

            } else return openConnection(ctx.paramDataSource).then((datasource: DataSource)=>{

                globalThis.database = {
                    dataSource: datasource
                };
                
                ctx.dataSource = datasource;

                return resolve(datasource);

            }).catch(err=>{
                console.log("Error in connection :");
                console.error(err);
                return reject(err);
            })
        })
    }

    // Try resolve metadata typeorm
    public getRepository( entity_class:any ): Repository<any>{

        return this.dataSource.getRepository(entity_class);
        
        /*
        let type_class = entity_class.name.toLowerCase();
        
        let class_metadata:any;

        switch(type_class){
            case "user":
                return this.dataSource.getRepository(User);
            case "login":
                return this.dataSource.getRepository(Login);
            case "world":
                return this.dataSource.getRepository(World);
            case "resource":
                return this.dataSource.getRepository(Resource);
            case "province":
                return this.dataSource.getRepository(Province);
            case "player":
                return this.dataSource.getRepository(Player);
            case "npc":
                return this.dataSource.getRepository(Npc);
            case "market":
                return this.dataSource.getRepository(Market);
            case "city":
                return this.dataSource.getRepository(City);
            case "building":
                return this.dataSource.getRepository(Building);
            case "position":
                return this.dataSource.getRepository(Position);
            case "offer":
                return this.dataSource.getRepository(Offer);
            case "sale":
                return this.dataSource.getRepository(Sale);
        }*/

         
    };

}


/* Test
import { User } from "./entities/user";
openConnection().then(async (datasource: DataSource)=>{
    console.log("INICIANDO TESTE")

    let reposi = datasource.getRepository(User);
    console.log(await reposi.count());

}).catch(err=>{
    console.log("Error in connection :");
    console.error(err);
})
/**/