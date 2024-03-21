"use client"

import { cn } from "@/lib/utils";
import { AccountCircle, ArrowBackIos, ArrowDropDown, ArrowForwardIos, ChatBubble, NotificationsActive} from "@mui/icons-material";
import { CircleDollarSign } from "lucide-react"
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";

import { useMediaQuery } from "usehooks-ts";

export const Navigation = () => {
    const pathname = usePathname();
    const isMobile = useMediaQuery("(max-width: 768px)");

    const sidebarWidth = 310;

    const sidebarRef = useRef<ElementRef<"aside">>(null);
    const navbarRef = useRef<ElementRef<"div">>(null);
    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(isMobile);

    useEffect(() => {
        if (isMobile) {
            collapse();
        } else {
            resetWidth();
        }
    }, [isMobile]);

    useEffect(() => {
        if (isMobile) {
            collapse();
        }
    }, [pathname, isMobile]);

    const resetWidth = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(false);
            setIsResetting(true);

            sidebarRef.current.style.width = `${sidebarWidth}px`;
            navbarRef.current.style.setProperty(
                "width",
                isMobile ? "0" : `calc(100% - ${sidebarWidth}px)`
            );
            navbarRef.current.style.setProperty(
                "left",
                isMobile ? "100%" : `${sidebarWidth}px`
            );
            setTimeout(() => setIsResetting(false), 300);
        }
    };

    const collapse = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(true);
            setIsResetting(true);

            sidebarRef.current.style.width = "0";
            navbarRef.current.style.setProperty("width", "100%");
            navbarRef.current.style.setProperty("left", "0");
            setTimeout(() => setIsResetting(false), 300);
        }
    };

    return (
        <div className={isMobile ? "h-full absolute left-0 z-[999999999999]" : ""}>
            <aside
                ref={sidebarRef}
                className="h-full bg-[#1E3A61] overflow-y-auto relative flex w-[280px] flex-col z-[99999] "
            >
                <div
                    role="button"
                    onClick={ collapse }
                    className={cn(
                        "absolute top-[0] flex items-center right-[0px] h-[100%] w-[25px] bg-white transition-transform",
                        isMobile && "opacity-100"
                    )}
                >
                    <div className="h-[70px] flex items-center  bg-[#1E3A61]">
                        <ArrowBackIos className="w-4 text-white text-[17px]"/>
                    </div>
                </div>

                <div className="flex items-center justify-between border-b-[1px] p-3 gap-4 w-[290px]">
                    <div className="flex gap-2 items-center">
                        <AccountCircle className="text-white text-[40px]"/>
                        <div className="text-white text-[20px]">Hello User</div>
                    </div>
                    <NotificationsActive className="text-white text-[27px]"/>
                </div>
                
                <div className=" text-white text-[18px] flex flex-col gap-y-2 w-[290px]">
                    <div className="flex p-3 bg-[#3e5f8b] justify-between">
                        <div className="flex gap-2">
                            <ChatBubble />
                            <p>Discussion Forum</p>
                        </div>
                        <ArrowDropDown className="ml-5"/>
                    </div>
                    
                    <div className="flex p-3 gap-2 ">
                        <CircleDollarSign />
                        <p>Market Stories</p>
                    </div>

                    <div className="ml-[33px] p-3 mt-[-20px]">
                        <p>Sentiment</p>
                        <p className="my-2">Market</p>
                        <p className="my-2">Sector</p>
                        <p className="my-2">Watchlist</p>
                        <p className="my-2">Events</p>
                        <p className="my-2">News/Interview</p>
                    </div>
                </div>
            </aside>
            <div 
                ref={navbarRef}
                className={cn(
                    "absolute h-[50px] top-[45%] z-[99999] left-0 w-[20px]",
                    isResetting && "transition-all ease-in-out duration-30",
                    isMobile && "left-0 w-full"
                )}
            >
                <div className="bg-transparent px-0 py-2 w-full">
                    {isCollapsed && <ArrowForwardIos onClick={resetWidth} role="button" className="h-[50px] w-[20px] text-muted-foreground bg-[#1E3A61] text-white" />}
                </div>
            </div>
        </div>
    )
}