export interface Address {
    _id: string;
    cep: string;
    city: string;
    complement: string;
    district: string;
    number: string;
    state: string;
    street: string
}

export interface User {
    _id: string;
    name: string;
    emaik: string;
    phone: string;
    createdAt: string;
    address: Address[];
    avarageRating: number | null;
    favorites: string[]
}
