import type { NextApiRequest, NextApiResponse } from "next";   
import {groq} from "next-sanity";
import { sanityClient } from "../../sanity";
import { Technology } from "../../typing";


type Data = {
    techs: Technology[]
}

const query = groq`
    *[_type == "skill"]
`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const techs: Technology[] = await sanityClient.fetch(query);

    res.status(200).json({ techs })
  }
  