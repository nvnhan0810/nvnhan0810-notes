import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./prisma";


export const authOptions: NextAuthOptions = {
    secret: process.env.AUTH_SECRET,
    adapter: <Adapter>PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
};

export const isAdmin = async (): Promise<boolean> => {
    const auth = await getServerSession(authOptions);

    return !!auth && auth?.user?.email === 'nguyenvannhan0810@gmail.com';
}