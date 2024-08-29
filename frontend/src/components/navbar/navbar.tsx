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

export function MenubarDemo() {
    return (
        <div className="mx-10 my-5">
            <Menubar>
                <h1 className="text-2xl font-semibold text-gray-700"><strong>BetterWorld </strong>&nbsp;&nbsp;|</h1>
                <MenubarMenu>
                    <MenubarTrigger>Home</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>How It Works</MenubarTrigger>
                    <MenubarContent>
                        <MenubarSub>
                            <MenubarSubTrigger>Share</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>Email link</MenubarItem>
                                <MenubarItem>Messages</MenubarItem>
                                <MenubarItem>Notes</MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>About Us</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>
    )
}
