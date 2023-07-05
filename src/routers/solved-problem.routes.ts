import { Router } from "express";
import { solvedProblemController } from "../controllers";
import { validateDataFields } from "../middlewares";

const solvedRouter:Router = Router()

solvedRouter.post('/resolve', validateDataFields, solvedProblemController);

export { solvedRouter }