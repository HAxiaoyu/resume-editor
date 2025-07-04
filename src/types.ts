
export interface Resume {
    titleNameMap: TitleNameMap;
    avatar: Avatar;
    profile: Profile;
    educationList: Education[];
    awardList: Award[];
    workExpList: WorkExperience[];
    skillList: Skill[];
    projectList: Project[];
    workList: any[]; // Define more specific type if needed
    aboutme: AboutMe;
    theme: Theme;
}

export interface TitleNameMap {
    profile: string;
    educationList: string;
    workExpList: string;
    projectList: string;
    skillList: string;
    awardList: string;
    workList: string;
    aboutme: string;
}

export interface Avatar {
    src: string;
    hidden: boolean;
}

export interface Profile {
    name: string;
    email: string;
    mobile: string;
    github: string;
    zhihu: string;
    workExpYear: string;
}

export interface Education {
    edu_time: (string | null)[];
    school: string;
    major: string;
    academic_degree: string;
}

export interface Award {
    award_info: string;
    award_time: string;
}

export interface WorkExperience {
    company_name: string;
    department_name: string;
    work_time: (string | null)[];
    work_desc: string;
}

export interface Skill {
    // Define skill properties if any in the future
}

export interface Project {
    project_name: string;
    project_role: string;
    project_time: string;
    project_desc: string;
    project_content: string;
}

export interface AboutMe {
    aboutme_desc: string;
}

export interface Theme {
    color: string;
    tagColor: string;
}
