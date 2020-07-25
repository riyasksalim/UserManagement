

    export interface Name {
        title: string;
        first: string;
        last: string;
    }

    export interface Location {
        street: string;
        city: string;
        state: string;
        zip: number;
    }

    export interface Picture {
        large: string;
        medium: string;
        thumbnail: string;
    }

    export class User {
        gender: string;
        name: Name;
        location: Location;
        email: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
        registered: number;
        dob: number;
        phone: string;
        cell: string;
        picture: Picture;
    }

    export interface Result {
        user: User;
    }

    export interface ResponseApi {
        results: Result[];
        // nationality: string;
        // seed: string;
        // version: string;
    }


