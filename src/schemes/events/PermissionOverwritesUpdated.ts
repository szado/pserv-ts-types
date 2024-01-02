import {PermissionOverwritesValue} from "../PermissionOverwritesValue";

export interface PermissionOverwritesUpdated {
    layer: 'Global' | 'Space' | 'Room' | 'Topic';
    layerId: string | null;
    target: 'User' | 'Role';
    targetId: string;
    overwrites: PermissionOverwritesValue;
}