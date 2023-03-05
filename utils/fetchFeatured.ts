import { Project } from "../typing";


export const fetchFeatured =async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getFeatured`)
    const data = await res.json();

    const projects: Project[] = data.projects;

    // console.log("fetching", projects);

    return projects;
}