import { NextApiRequest, NextApiResponse } from "next";
import { primeUpto } from '@banks-nx/banks-core';

export default function handler(req: NextApiRequest, res : NextApiResponse) {
    return res.status(200).json({
        primes: primeUpto(50)
    })
}
