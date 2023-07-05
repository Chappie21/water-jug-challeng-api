import { Request, Response, NextFunction } from "express";
import { IProblemBody } from "../interfaces";
import { errors } from "../helpers";

// middleware to validate data is correct to evaluate the posible solution
export const validateDataFields = async (req:Request, res:Response, next:NextFunction) => {
    try {
        // get data of body request
        const { bucketX, bucketY, goalZ }:IProblemBody = req.body;

        // validate all fields requires exist
        if ( !bucketX || !bucketY || !goalZ) {
            return res.status(400).json(errors.problemSolver.P0001);
        }
        
        // validate values are integer
        if ( !Number.isInteger(bucketX) || !Number.isInteger(bucketY) || !Number.isInteger(goalZ)) {
            return res.status(400).json(errors.problemSolver.P0002);
        }

        // validate values are positive
        if (bucketX < 0 || bucketY < 0 || goalZ < 0) {
            return res.status(400).json(errors.problemSolver.P0003);
        }
        
        // move request to controller problem solver
        return next();
    } catch(error) {
        console.log(error);
        // return error
        return res.status(500).json({...errors.serverError.SE0001, error})
    }
}