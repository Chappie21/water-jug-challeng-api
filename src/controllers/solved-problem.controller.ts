import { Request, Response } from "express"
import { errors } from "../helpers";
import { problemHasSolution } from "../helpers";
import { IProblemBody } from "interfaces";
import { createExplanationPivotX, createExplanationPivotY } from "../helpers";

export const solvedProblemController = async (req:Request, res:Response) => {
    try {

        const { bucketX, bucketY, goalZ }:IProblemBody = req.body;

        // verify problem have solution
        if (!problemHasSolution(req.body)) {
            return res.status(400).json(errors.problemSolver.P0004);
        }

        const solvedPivotX = createExplanationPivotX(bucketX, bucketY, goalZ);
        const solvedPivotY = createExplanationPivotY(bucketX, bucketY, goalZ);

        // problem resolved!!!
        return res.status(200).json({
            message: 'resolved!!!',
            solution:  solvedPivotX.length <= solvedPivotY.length ? solvedPivotX : solvedPivotY
        })
    } catch (error:Error | any) {
        if (error.message === errors.problemSolver.P0004.errorCode) {
            return res.status(400).json(errors.problemSolver.P0004);
        }

        // return error
        return res.status(500).json({...errors.serverError.SE0001, error: error.message});
    }
}