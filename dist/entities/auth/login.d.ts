import { ILogin } from "@warlords/common";
import { User } from "../user";
import { TypeLogin } from "./type_login";
export declare class Login implements ILogin {
    id: string;
    identifier: string;
    password: string;
    nonce: string;
    type: TypeLogin;
    user: User;
    constructor(values?: any);
}
