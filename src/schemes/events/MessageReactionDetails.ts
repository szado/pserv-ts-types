import {ReactedUser, ReactionType} from "../Reaction";

export interface MessageReactionDetails {
    messageId: string;
    type: ReactionType;
    value: string;
    users: ReactedUser[];
}
