export interface GetPermissionOverwrites {
    layer: 'Global' | 'Space' | 'Room' | 'Topic';
    layerId: string | null;
    target: 'User' | 'Role';
    targetId: string;
}