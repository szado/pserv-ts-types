import {User} from "./User";
import {ChatLocation} from "./ChatLocation";

export type MessageType = 'Text'|'RoomJoin'|'RoomLeave'|'SpaceJoin'|'SpaceLeave'|'TopicChange'|'CustomNickChange'|'System';

export interface MessageAuthor {
    user: User;
    customNick?: string;
    color?: string;
}

export interface Message {
    id: string;
    location: ChatLocation;
    createdAt: string;
    type: MessageType;
    author: MessageAuthor;
    content?: string;
    topicRef: string | null;
    attachments: string[] | null;
}