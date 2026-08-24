import {ReactionType} from "./Reaction";

export interface MessagePollOption {
    type: ReactionType;
    value: string;
    label: string;
}

/**
 * Poll attached to a message: its content is the question and the options are the
 * only reactions the message accepts. The votes are counted by the ordinary
 * reaction counters, so they arrive in `Message.reactions` like any other reaction.
 */
export interface MessagePoll {
    multipleChoice: boolean;
    options: MessagePollOption[];
}
