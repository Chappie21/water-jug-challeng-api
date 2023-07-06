import { Bucket } from "../models";
import { IExplanation } from "../interfaces";
import { createExplanationMessage } from "./createExplanationMessage";
import { actions } from "./actions";



const createExplanation = (capacityX:number, capacityY:number, goalZ:number, isInvert:boolean = false):IExplanation[] => {
    // initializae Explanations list
    let listExplanations:IExplanation[] = [];

    // create buckets
    const bucketX = new Bucket(capacityX);
    const bucketY = new Bucket(capacityY);

    // generate Explanations
    while (bucketX.currentQuantity !== goalZ && bucketY.currentQuantity !== goalZ) {
        
        // if bucket X is empty and bucketY is not full, fill bucket x
        if (bucketX.isEmpty() && !bucketY.isFull()) {
            // fill bucket X
            bucketX.fill();

            // save explanation
            listExplanations.push(createExplanationMessage(bucketX.currentQuantity, bucketY.currentQuantity, actions.fill, isInvert))
        }

        // if bucket X is Empty and bucket Y is Full, tranfer bucket Y to bucket X
        if (bucketX.isEmpty() && bucketY.isFull()) {
            // transfer bucket Y to bucket X
            bucketY.transferToBucket(bucketX, bucketY.currentQuantity);

            // save explanation
            listExplanations.push(createExplanationMessage(bucketX.currentQuantity, bucketY.currentQuantity, actions.transfer, !isInvert))
        }

        // if bucket Y is full dump it
        if (bucketY.isFull()) {
            bucketY.toEmpty();

            // save explanation
            listExplanations.push(createExplanationMessage(bucketX.currentQuantity, bucketY.currentQuantity, actions.dump, !isInvert))
        }

        // if bucket X or Bucket Y is equal to goal z, break while cicle
        if (bucketX.currentQuantity === goalZ || bucketY.currentQuantity === goalZ ) {
            break;
        }

        // transfer bucket X to bucket Y
        bucketX.transferToBucket(bucketY, bucketX.currentQuantity);

        // save explanation
        listExplanations.push(createExplanationMessage(bucketX.currentQuantity, bucketY.currentQuantity, actions.transfer, isInvert))
    }

    return listExplanations;
}

// create Explanation use Pivot bucket Y
export const createExplanationPivotY = (capacityX:number, capacityY:number, goalZ:number):IExplanation[] => {
    return createExplanation(capacityY, capacityX, goalZ, true);
}

// create Explanation use Pivot bucket X
export const createExplanationPivotX = (capacityX:number, capacityY:number, goalZ:number):IExplanation[] => {
    return createExplanation(capacityX, capacityY, goalZ);
}