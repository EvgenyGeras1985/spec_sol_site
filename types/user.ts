export interface User {
    text?: string;
    name: string;
    surname: string;
    patronymics: string;
    id: number;
    cart_id: number;
    email: string;
    phone: string;
    role: string;
    auth?: boolean;
}