"use client"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Image from "next/image";
import SignIn from "../signinform/signin";
import { SignOut } from "../signoutform/signout";

export function MenubarDemo() {
    const router = useRouter();
    const handleNavigation = (path: string) => {
        router.push(path);
    };
    const { data: session } = useSession();
    return (
        <div className="mx-10 my-4">
            <Menubar className="flex justify-between items-center">
                <div className="flex space-x-1">
                    <Image src="/images/betterworld.png" alt="Logo" width="60" height="60" />
                    <MenubarMenu>
                        <MenubarTrigger onClick={() => handleNavigation('/')}>Home</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>How It Works</MenubarTrigger>
                        <MenubarContent>
                            <MenubarSub>
                                <MenubarSubTrigger>Share</MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem>Email link</MenubarItem>
                                    <MenubarItem>Messages</MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>About Us</MenubarTrigger>
                    </MenubarMenu>
                </div>
                <div>
                    <MenubarMenu>
                        {session ? (
                            <div className="flex items-center">
                                {/* <span className="">Hello, {session.user?.name}</span> */}
                                <MenubarTrigger>
                                    <Avatar>
                                        <AvatarImage src={session.user?.image || "https://github.com/shadcn.png"} />
                                        <AvatarFallback>{session.user?.name?.[0] || "U"}</AvatarFallback>
                                    </Avatar>
                                    <MenubarContent className="min-w-[unset] w-auto px-3 py-2">
                                        <SignOut />
                                    </MenubarContent>
                                </MenubarTrigger>
                            </div>
                        ) : (
                            <SignIn name="Sign in" />
                        )}
                    </MenubarMenu>
                </div>
            </Menubar>
        </div>
    )
}
