import NextAuth from "next-auth";

declare module "next-auth" {
    interface sesion {
        user: {
            id: string;
            name: string;
            email: string;
            language: string;
            tokenJWT: string;
        }
    }
};