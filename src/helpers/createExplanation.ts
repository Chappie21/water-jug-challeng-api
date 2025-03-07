import { Bucket } from "../models";
import { IExplanation } from "../interfaces";
import { createExplanationMessage } from "./createExplanationMessage";
import { actions } from "./actions";
import { errors } from "./errors";

const createExplanation = (
    capacityX: number,
    capacityY: number,
    goalZ: number,
    isInvert: boolean = false
): IExplanation[] => {
    const listExplanations: IExplanation[] = [];
    const visitedStates = new Set<string>();
    const bucketX = new Bucket(capacityX);
    const bucketY = new Bucket(capacityY);

    while (
        bucketX.currentQuantity !== goalZ &&
        bucketY.currentQuantity !== goalZ
    ) {
        const stateKey = `${bucketX.currentQuantity},${bucketY.currentQuantity}`;
        if (visitedStates.has(stateKey)) {
            throw new Error(errors.problemSolver.P0004.errorCode);
        }
        visitedStates.add(stateKey);

        if (bucketX.isEmpty() && !bucketY.isFull()) {
            bucketX.fill();
            listExplanations.push(
                createExplanationMessage(
                    bucketX.currentQuantity,
                    bucketY.currentQuantity,
                    actions.fill,
                    isInvert
                )
            );
        } else if (bucketX.isEmpty() && bucketY.isFull()) {
            bucketY.transferToBucket(bucketX, bucketY.currentQuantity);
            listExplanations.push(
                createExplanationMessage(
                    bucketX.currentQuantity,
                    bucketY.currentQuantity,
                    actions.transfer,
                    isInvert
                )
            );
        } else if (bucketY.isFull()) {
            bucketY.toEmpty();
            listExplanations.push(
                createExplanationMessage(
                    bucketX.currentQuantity,
                    bucketY.currentQuantity,
                    actions.dump,
                    isInvert
                )
            );
        } else {
            const transferAmount = Math.min(
                bucketX.currentQuantity,
                bucketY.remainingSpace()
            );
            bucketX.transferToBucket(bucketY, transferAmount);
            listExplanations.push(
                createExplanationMessage(
                    bucketX.currentQuantity,
                    bucketY.currentQuantity,
                    actions.transfer,
                    isInvert
                )
            );
        }
    }

    if (listExplanations.length > 0) {
        listExplanations[listExplanations.length - 1].explanation += " (solved)";
    }
    return listExplanations;
};

// FIX: Lógica de inversión simplificada
export const createExplanationPivotY = (
    capacityX: number,
    capacityY: number,
    goalZ: number
): IExplanation[] => {
    return createExplanation(capacityY, capacityX, goalZ, true);
};

export const createExplanationPivotX = (
    capacityX: number,
    capacityY: number,
    goalZ: number
): IExplanation[] => {
    return createExplanation(capacityX, capacityY, goalZ, false);
};