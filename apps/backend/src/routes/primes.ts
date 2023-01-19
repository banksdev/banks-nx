import express, { Request, Response } from "express";
import { primeUpto } from '@banks-nx/banks-core';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        primes: primeUpto(50)
    })
})

export default router;