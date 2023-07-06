import { IProblemBody } from "../interfaces"

export const problemHasSolution = ({ bucketX, bucketY, goalZ }:IProblemBody):boolean => {

    // The buckets must be greater than or equal to the value of the goal Z
    if (bucketX < goalZ && bucketY < goalZ) return false;

    // validate bucket X and Bucket Y is not equal
    if (bucketX === bucketY) return false;

    // problem have solution
    return true;
}