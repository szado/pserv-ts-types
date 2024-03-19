import {Topic} from "../Topic";
import {ChatLocation} from "../ChatLocation";

export interface NewTopic {
    location: ChatLocation;
    topic: Topic;
}
