"use client"

import React from "react";
import { signOut } from "next-auth/react"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function SignOut() {
    const router = useRouter();
    const handleSignOut = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signOut({ redirect: false });  // prevent automatic redirect
        router.push('/');
    };
    return (
        <form onSubmit={handleSignOut}>
            <Button className="" type="submit" variant="ghost" size="sm">Sign Out</Button>
        </form>
    )
}
