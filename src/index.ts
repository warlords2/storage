let dotenv  = require('dotenv');
dotenv.config({path:'./.env'});

import { BaseEntity, DataSource, FindOneOptions, Repository } from "typeorm";
import { buildDatabase, ConectionParameter}  from "./database";
import { Login } from "./entities/auth/login";
import { Building } from "./entities/game/building";
import { City } from "./entities/game/city";
import { Position } from "./entities/game/geometry/position";
import { Market } from "./entities/game/market";
import { Offer } from "./entities/game/market/offer";
import { Sale } from "./entities/game/market/sale";
import { Npc } from "./entities/game/npc";
import { Player } from "./entities/game/player";
import { Province } from "./entities/game/province";
import { Resource } from "./entities/game/resource";
import { World } from "./entities/game/world";
import { User } from "./entities/user";
export { DataSource } from "typeorm";

export { User } from "./entities/user";
export { Login } from "./entities/auth/login";
export { TypeLogin } from "./entities/auth/type_login";
export { World } from "./entities/game/world";
export { Resource } from "./entities/game/resource";
export { Province } from "./entities/game/province";
export { Player } from "./entities/game/player";
export { Npc } from "./entities/game/npc";
export { Market } from "./entities/game/market";
export { City } from "./entities/game/city";
export { Building } from "./entities/game/building";
export { Position } from "./entities/game/geometry/position";
export { Offer } from "./entities/game/market/offer";
export { Sale } from "./entities/game/market/sale";

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
openConnection().then(async (datasource: DataSource)=>{
    console.log("INICIANDO TESTE")

    let reposi = datasource.getRepository(User);
    console.log(await reposi.count());

}).catch(err=>{
    console.log("Error in connection :");
    console.error(err);
})
/**/