import {Topic} from "./Topic";

export interface Room {
    id: string;
    spaceId: string | null;
    name: string;
    description: string;
    topics: Topic[];
}