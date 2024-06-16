"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const AuthDropdown = ({ auth }: { auth: Session | null }) => {
    return auth?.user && (
        <DropdownMenu>
            <DropdownMenuTrigger>{auth.user.name}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => signOut()}> 123
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AuthDropdown;