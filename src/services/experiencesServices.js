import { experiences } from "../data/experiences";

export const getExperiences = async () => {
    return experiences;
};

export const getExperience = async (id) => {
    return experiences.find((experience) => String(experience.id) === String(id)) ?? null;
};
