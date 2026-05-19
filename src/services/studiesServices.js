import { studies } from "../data/studies";

export const getStudies = async () => {
    return studies;
};

export const getStudy = async (id) => {
    return studies.find((study) => String(study.id) === String(id)) ?? null;
};
