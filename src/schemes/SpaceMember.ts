import {User} from "./User";

export interface SpaceMember {
    user: User;
    roles: string[];
}