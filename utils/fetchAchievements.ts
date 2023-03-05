import { Achievement} from "../typing";


export const fetchAchievements=async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAchievement`)
    const data = await res.json();

    const achievements: Achievement[] = data.achievements;

    // console.log("fetching", achievements);

    return achievements;
}