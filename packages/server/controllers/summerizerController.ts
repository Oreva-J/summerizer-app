import type { Request, Response } from "express"

const summerize = async (req: Request, res:Response) => {
     res.json({message: "App is Healthyyyy"})
}


export const summerizerControllers = {
    summerize
}