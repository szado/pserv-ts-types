import {RoomMember} from "../RoomMember";

export interface RoomMemberUpdated {
    roomId: string;
    member: RoomMember;
}