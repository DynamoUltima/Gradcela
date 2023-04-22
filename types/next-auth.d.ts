import NextAuth from "next-auth";
export type Role = "client" | "admin" | "provider";


export interface Data {
    serviceType: string[];
    campus: string;
    expertise: any[];
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: any[];
    token: string;
    created_on: Date;
    updated_on: Date;
    __v: number;
}



declare module "next-auth" {

    interface Session {
        user: {
            message: string;
            data: Data;
            token: string;
        }
    }
}