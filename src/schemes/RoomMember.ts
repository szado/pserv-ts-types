import {User} from "./User";
import {SpaceMember} from "./SpaceMember";

export interface RoomMember {
    user: User | null;
    spaceMember: SpaceMember | null;
    roles: string[] | null;
}