import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SignIn({ name }) {
    const handleSignIn = async (e) => {
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
