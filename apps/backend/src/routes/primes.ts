import express, { Request, Response } from "express";
import { PrimesPayload, primeUpto,  } from '@banks-nx/banks-core';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    console.log('reached backed');
    
    const data : PrimesPayload = {
        primes: primeUpto(50)
    }
    return res.status(200).json(data);
})

export default router;