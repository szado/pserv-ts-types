import {Permission} from "../Permission";

export interface SetRolePermissions {
    permissions: Permission[];
    layer: 'Space' | 'Room' | 'Topic';
    layerId: string;
    roleId: string;
}
