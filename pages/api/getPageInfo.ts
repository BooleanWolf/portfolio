import type { NextApiRequest, NextApiResponse } from "next";   
import {groq} from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo, Project, Technology } from "../../typing";



const query = groq`
    *[_type == "pageInfo"][0]
`;

type Data = {
    infos: PageInfo;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const infos: PageInfo = await sanityClient.fetch(query);

    res.status(200).json({ infos })
  }
  