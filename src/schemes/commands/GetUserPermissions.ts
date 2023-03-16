export interface GetUserPermissions {
    layer: 'Global' | 'Space' | 'Room' | 'Topic';
    layerId: string;
    userId: string;
    names: string[] | null | undefined;
}
