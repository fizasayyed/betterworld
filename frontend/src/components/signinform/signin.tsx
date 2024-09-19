import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SignInProps {
    name: string; // Define the type for the 'name' prop
}

export default function SignIn({ name }: SignInProps) {
    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signIn("google");
    };

    return (
        <form onSubmit={handleSignIn}>
            <Button type="submit" variant="outline">
                <Image className="mr-2" src="/images/google_logo.png" alt="Google logo" width="20" height="20" />
                {name}
            </Button>
        </form>
    );
}
