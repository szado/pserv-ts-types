export type ReactionType = 'emoji' | 'emoticon';

export interface MessageReaction {
    type: ReactionType;
    value: string;
    count: number;
}

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
