import { LOGIN_URL_TOKEN } from "./services/auth/auth.types";
import { BASE_SERVICE_URL_TOKEN } from "./services/rest/baseService.service";
import { GET_PROFILE_URL } from "./user-profile/user-profile.service";

export const urlProviders = [
    {
        provide: BASE_SERVICE_URL_TOKEN,
        useValue: 'https://fakestoreapi.com',
    },
    {
        provide: LOGIN_URL_TOKEN,
        useValue: 'auth/login',
    },
    {
        provide: GET_PROFILE_URL,
        useValue: 'users/1', // Just for fakestoreapi
    }
];