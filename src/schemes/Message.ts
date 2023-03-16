import {User} from "./User";

export interface Message {
    id: string;
    author: User;
    topicId: string;
    content: string;
}