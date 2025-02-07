import { Observable } from "rxjs";
import { ID } from "../services/rest/base-service.types";
import { AbstractWithUrls } from "../services/with-url.types";

export type FullName = {
    firstname: string;
    lastname: string;
}
export type Geolocation = {
    lat: string;
    long: string;
};
export type Address = {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: Geolocation;
};
export type User = ID & {
    email: string;
    username: string;
    phone: string;
    name: FullName;
    address: Address;
};
export abstract class AbstractProfileService<T extends ID> extends AbstractWithUrls {
    abstract getProfile(): Observable<T>;
}