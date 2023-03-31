import { User } from "../user";
import { TypeLogin } from "./type_login";
export declare class Login {
    id: number;
    username: string;
    password: string;
    nonce: string;
    type: TypeLogin;
    user: User;
    constructor(values?: any);
}
