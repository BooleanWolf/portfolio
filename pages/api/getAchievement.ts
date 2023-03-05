import type { NextApiRequest, NextApiResponse } from "next";   
import {groq} from "next-sanity";
import { sanityClient } from "../../sanity";
import { Achievement, Experiences, Project, Technology } from "../../typing";



const query = groq`
    *[_type == "achievement"] {
        ...,
        skills[]->
    }
`;

type Data = {
    achievements: Achievement[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const achievements: Achievement[] = await sanityClient.fetch(query);

    res.status(200).json({ achievements })
  }
  