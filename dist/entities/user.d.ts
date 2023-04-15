import { User as IUser } from '@warlords/common/';
import { Login } from "./auth/login";
import { Player } from "./game/player";
export declare class User implements IUser {
    id: number;
    name: string;
    logins: Login[];
    players: Player[];
}
