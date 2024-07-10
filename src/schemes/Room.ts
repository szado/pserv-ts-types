import {Topic} from "./Topic";
import {User} from "./User";

export type RoomType = 'Text' | 'Pm';

export enum RoomFlag {
    AllowSystemMessages = 1 << 0,
}

export interface Room {
    id: string;
    spaceId: string | null;
    name: string;
    description: string;
    type: RoomType;
    defaultTopic: Topic | null;
    recipients: User[] | null;
    flags: number;
}