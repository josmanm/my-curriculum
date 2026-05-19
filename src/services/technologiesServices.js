import { technologies } from "../data/technologies";

export const getTechnologies = async () => {
    return technologies;
};

export const getTechnology = async (id) => {
    return technologies.find((technology) => technology.name === id || String(technology.id) === String(id)) ?? null;
};
