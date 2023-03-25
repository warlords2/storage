import { User } from "../../model";
import { Npc } from "./npc";
export interface Player extends Npc {
    user: User;
}
