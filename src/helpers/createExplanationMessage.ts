import { IExplanation } from "../interfaces";
import { actions } from "./actions";


export const createExplanationMessage = (quantityX:number, quantityY:number, action: number, isInvert:boolean):IExplanation => {
    const bucketXName:string = !isInvert ? 'X' : 'Y' ;
    const bucketYName:string = !isInvert ? 'Y' : 'X' ;

    switch (action) {
        case actions.fill:
            return { quantityX, quantityY, explanation: `Fill bucket ${bucketXName}`}

        case actions.dump:
            return { quantityX, quantityY, explanation: `Dump bucket ${bucketXName}`}

        case actions.transfer:
            return { quantityX, quantityY, explanation: `Transfer bucket ${bucketXName} to  bucket ${bucketYName}`}

        default:
            return { quantityX, quantityY, explanation: `Solved`}
    }
} 