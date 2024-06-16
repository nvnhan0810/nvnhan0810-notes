"use client";

import { LogOutIcon } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const AuthDropdown = ({ auth }: { auth: Session | null }) => {
    return auth?.user && (
        <DropdownMenu>
            <DropdownMenuTrigger>{auth.user.name}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => signOut()}> 
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AuthDropdown;