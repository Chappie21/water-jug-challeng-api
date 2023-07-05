import { Request, Response } from "express"
import { errors } from "../helpers";

export const solvedProblemController = async (req:Request, res:Response) => {
    try {

        // resolve problem!!!
        return res.status(200).json({
            message: 'resolved!!!'
        })
    } catch (error) {
        console.log(error);

        // return error
        return res.status(500).json({...errors.serverError.SE0001, error});
    }
}