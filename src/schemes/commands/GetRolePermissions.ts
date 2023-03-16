export interface GetRolePermissions {
    layer: 'Space' | 'Room' | 'Topic';
    layerId: string;
    roleId: string;
    names: string[] | null | undefined;
}