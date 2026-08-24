import {ReactionType} from "../Reaction";

export interface GetMessageReactionDetails {
    messageId: string;
    type: ReactionType;
    value: string;
    limit?: number;
    offset?: number;
}
