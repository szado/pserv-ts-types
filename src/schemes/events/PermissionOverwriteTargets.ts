import {ChatLayerCriteria} from "../ChatLayerCriteria";
import {SpaceMember} from "../SpaceMember";
import {RoomMember} from "../RoomMember";
import {Role} from "../Role";

export interface PermissionOverwriteTargets {
    layerCriteria: ChatLayerCriteria;
    spaceMembers: SpaceMember[] | null;
    roomMembers: RoomMember[] | null;
    roles: Role[] | null;
}