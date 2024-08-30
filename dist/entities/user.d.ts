import { IUser } from '@warlords/common/';
import { Login } from "./auth/login";
import { Player } from "./game/player";
export declare class User implements IUser {
    id: string;
    name: string;
    logins: Login[];
    players: Player[];
    createdAt: Date;
    updatedAt: Date;
    constructor(values?: any);
}
