import axios from "axios";
import endPoints from "./endPoints";

export const getExperiences = async () => {
    try {
        const {data} = await axios.get(endPoints.experiences);
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const getExperience = async (id) => {
    try {
        const {data} = await axios.get(`${endPoints.experiences}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}