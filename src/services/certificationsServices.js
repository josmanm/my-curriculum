import { certifications } from "../data/certifications";

export const getCertifications = async () => {
    return certifications;
};

export const getCertification = async (id) => {
    return certifications.find((cert) => String(cert.id) === String(id)) ?? null;
};