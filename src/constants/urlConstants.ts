import { environment } from "src/environments/environment";

export const URL_CONSTANT = Object.freeze({
    BASE_URL: environment.API_URL,
    ADMIN: "/admin",
    IMAGE_UPLOAD: environment.API_URL + "/images"
});