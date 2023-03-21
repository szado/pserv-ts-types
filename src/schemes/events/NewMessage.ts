import {Message} from "../Message";

export interface NewMessage {
    message: Message;
    roomId: string;
    topicId: string;
}
