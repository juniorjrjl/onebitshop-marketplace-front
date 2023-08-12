import { Address } from "./User";

export interface Image {
    filename: string;
    url: string;
    uri: string;
    type: string;
}

export interface Seller {
    _id: string;
    name: string;
    email: string;
    phone: string
}

export interface Product {
    _id: string;
    name: string
    price: string;
    category: string;
    createdAt: string;
    publishedData: string;
    description: string;
    seller: Seller;
    images: Image[];
    address: Address;
}
