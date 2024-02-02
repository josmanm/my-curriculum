import axios from "axios";
import endPoints from "./endPoints";

export const getTechnologies = async () => {
    try {
        const {data} = await axios.get(endPoints.technologies);
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const getTechnology = async (id) => {
    try {
        const {data} = await axios.get(`${endPoints.technologies}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}