let dotenv  = require('dotenv');
dotenv.config({path:'./.env'});

import { DataSource } from "typeorm";
import { buildDatabase, ConectionParameter}  from "./database";
export { DataSource } from "typeorm";

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
}