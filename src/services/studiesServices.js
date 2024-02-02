import axios from "axios";
import endPoints from "./endPoints";

export const getStudies = async () => {
    try {
        const {data} = await axios.get(endPoints.studies);
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const getStudy = async (id) => {
    try {
        const {data} = await axios.get(`${endPoints.studies}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}