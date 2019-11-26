import { APIBase, APIRequest, Int, ResponceEmpty } from '../API/APIBase'
export module Requests {
export class petsGet_request extends APIRequest<Pet[], Error> {
    limit: Int;
    public constructor(limit: Int) {
        super();
    }
    method(): string {
        return "GET";
    }
    path(): string {
        return `/pets`;
    }
}
export class petsPost_request extends APIRequest<ResponceEmpty, Error> {
    constructor() {
        super();
    }
    method(): string {
        return "POST";
    }
    path(): string {
        return `/pets`;
    }
}
export class petspetIdGet_request extends APIRequest<Pet, Error> {
    petId: Int;
    constructor(petId: Int) {
        super();
    }
    method(): string {
        return "GET";
    }
    path(): string {
        return `/pets/${this.petId}`;
    }
}
}