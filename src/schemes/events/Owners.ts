import {ChatLayerCriteria} from "../ChatLayerCriteria";
import {RoomMember} from "../RoomMember";
import {SpaceMember} from "../SpaceMember";

export interface Owners {
    layerCriteria: ChatLayerCriteria;
    spaceMembers: SpaceMember[] | null;
    roomMembers: RoomMember[] | null;
}