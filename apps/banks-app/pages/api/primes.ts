import { NextApiRequest, NextApiResponse } from "next";
import { PrimesPayload } from '@banks-nx/banks-core';
import axios from "axios";

export default async function handler(req: NextApiRequest, res : NextApiResponse) {
    const resp = await axios.get<PrimesPayload>('http://localhost:3333/primes');
    
    return res.status(200).json({
        primes: resp.data.primes
    })
}
