import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions, getServerSession } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient()


export const authOptions: NextAuthOptions = {
    secret: process.env.AUTH_SECRET,
    adapter: <Adapter>PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
};

export const isAdmin = async (): Promise<boolean> => {
    const auth = await getServerSession(authOptions);

    return !!auth && auth?.user?.email === 'nguyenvannhan0810@gmail.com';
}