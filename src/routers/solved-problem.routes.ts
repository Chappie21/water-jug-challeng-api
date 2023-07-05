import { Router } from "express";
import { solvedProblemController } from "../controllers";

const solvedRouter:Router = Router()

solvedRouter.post('/resolve', solvedProblemController);

export { solvedRouter }