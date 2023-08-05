export interface DeassignRole {
    roleId: string;
    userId: string;
    layer: 'Space' | 'Room';
    layerId: string;
}
