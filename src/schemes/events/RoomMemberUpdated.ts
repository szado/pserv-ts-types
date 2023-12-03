import {RoomMember} from "../RoomMember";

export interface RoomMemberUpdated {
    roomId: string;u
    userId: string;
    member: RoomMember;
}