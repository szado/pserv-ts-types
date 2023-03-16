import {Permission} from "../Permission";

export interface SetUserPermissions {
    permissions: Permission[];
    layer: 'Global' | 'Space' | 'Room' | 'Topic';
    layerId: string;
    userId: string;
}
