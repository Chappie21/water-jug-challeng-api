import { IExplanation } from "../interfaces";
import { actions } from "./actions";

export const createExplanationMessage = (
    quantityX: number,
    quantityY: number,
    action: number,
    isInvert: boolean
): IExplanation => {
    const [displayX, displayY] = isInvert ? [quantityY, quantityX] : [quantityX, quantityY];
    const [sourceBucket, targetBucket] = isInvert ? ["Y", "X"] : ["X", "Y"];

    switch (action) {
        case actions.fill:
            return {
                quantityX: displayX,
                quantityY: displayY,
                explanation: `Fill bucket ${sourceBucket}`,
            };
        case actions.dump:
            return {
                quantityX: displayX,
                quantityY: displayY,
                explanation: `Empty bucket ${targetBucket}`,
            };
        case actions.transfer:
            return {
                quantityX: displayX,
                quantityY: displayY,
                explanation: `Transfer from bucket ${sourceBucket} to ${targetBucket}`,
            };
        default:
            return { 
                quantityX: displayX, 
                quantityY: displayY, 
                explanation: "Solved" 
            };
    }
};