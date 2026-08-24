export type ReactionType = 'emoji' | 'emoticon';

/**
 * Globally aggregated counter of a single reaction on a message. A `count` of 0
 * means the last vote is gone and the reaction should disappear from the message.
 */
export interface MessageReaction {
    type: ReactionType;
    value: string;
    count: number;
}

/**
 * A reaction of a particular user, without any counter attached.
 */
export interface UserReaction {
    type: ReactionType;
    value: string;
}

export interface ToggledReaction extends UserReaction {
    isAdded: boolean;
}

export interface ReactedUser {
    id: string;
    nick: string;
}
