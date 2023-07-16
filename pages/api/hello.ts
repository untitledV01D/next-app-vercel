// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type Data = {
  name: string
}

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' });
};
