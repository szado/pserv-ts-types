import {PermissionOverwritesValue} from "../PermissionOverwritesValue";

export interface PermissionOverwritesChanged {
    layer: 'Global' | 'Space' | 'Room' | 'Topic';
    layerId: string | null;
    target: 'User' | 'Role';
    targetId: string;
    overwrites: PermissionOverwritesValue;
}