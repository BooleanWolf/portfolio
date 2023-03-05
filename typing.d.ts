interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}



export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    bgInformation: string;
    heroImage: Image;
    name: string;
    phone: string;
    profileImage: Image;
    role: string;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Project extends SanityBody {
    _type: "project";
    description: string;
    featured: boolean;
    github: string;
    projectPic: Image;
    skills: Technology[];
    tags: string[];
    title: string;
    youtube: string;
}

export interface Experiences extends SanityBody {
    _type: "experience";
    company: string;
    companyLogo: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyHere: boolean; 
    points: string[];
    role: string;
}

export interface Achievement extends SanityBody {
    _type: "achievement";
    contest: string;
    date: date;
    pic: Image;
    skills: Technology[];
    summary: string;
    title: string;
}

export interface Research extends SanityBody {
    _type: "research";
    title: string;
    description: string;
    conference: string;
    drive: string;
    authors: string[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

