import { Product, Seller } from "./Product";

export interface Message {
    _id?: string
    content: string;
    receiver: string;
    sender: string;
}

export interface Buyer {
    _id: string;
    email: string;
    name: string;
    phone: string
}

export interface Chat {
    _id: string;
    buyer: Buyer;
    messages: Message[];
    product: Product;
    seller: Seller;
    updatedAt: string;
}
