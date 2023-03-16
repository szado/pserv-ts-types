import {Topic} from "./Topic";

export interface Room {
    id: string;
    name: string;
    topics: Topic[];
}