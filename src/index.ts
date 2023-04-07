let dotenv  = require('dotenv');
dotenv.config({path:'./.env'});

import { DataSource, Repository } from "typeorm";
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
        
        let type_class = entity_class.name.toLowerCase();
        let repository:Repository<any>;

        switch(type_class){
            case "user":
                repository = this.dataSource.getRepository(User);
                break;
            case "login":
                repository = this.dataSource.getRepository(Login);
                break;
            case "world":
                repository = this.dataSource.getRepository(World);
                break;
            case "resource":
                repository = this.dataSource.getRepository(Resource);
                break;
            case "province":
                repository = this.dataSource.getRepository(Province);
                break;
            case "player":
                repository = this.dataSource.getRepository(Player);
                break;
            case "npc":
                repository = this.dataSource.getRepository(Npc);
                break;
            case "market":
                repository = this.dataSource.getRepository(Market);
                break;
            case "city":
                repository = this.dataSource.getRepository(City);
                break;
            case "building":
                repository = this.dataSource.getRepository(Building);
                break;
            case "position":
                repository = this.dataSource.getRepository(Position);
                break;
            case "offer":
                repository = this.dataSource.getRepository(Offer);
                break;
            case "sale":
                repository = this.dataSource.getRepository(Sale);
                break;
        }

        return repository;        
         
    };

}