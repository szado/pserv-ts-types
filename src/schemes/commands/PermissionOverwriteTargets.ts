import {ChatLayerCriteria} from "../ChatLayerCriteria";
import {PermissionOverwriteTargetDetails} from "../PermissionOverwriteTargetDetails";

export interface PermissionOverwriteTargets {
    layerCriteria: ChatLayerCriteria;
    targets: PermissionOverwriteTargetDetails[];
}