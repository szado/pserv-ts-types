import {User} from "./User";
import {ChatLocation} from "./ChatLocation";
import {MessageReaction} from "./Reaction";
import {MessagePoll} from "./MessagePoll";

export type MessageType = 'Text'|'RoomJoin'|'RoomMemberAdd'|'RoomLeave'|'SpaceJoin'|'SpaceLeave'|'TopicChange'|'CustomNickChange'|'Ephemeral'|'Poll';

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
    /**
     * Global counters only - what the asking user voted for comes separately as
     * `myReactions`, so the history stays identical for everybody.
     */
    reactions: MessageReaction[];
    poll?: MessagePoll;
}