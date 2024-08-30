import { ILogin } from "@warlords/common";
import { User } from "../user";
import { LoginType } from "./loginType";
export declare class Login implements ILogin {
    id: string;
    identifier: string;
    password: string;
    nonce: string;
    loginType: LoginType;
    userId: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    constructor(values?: any);
}
