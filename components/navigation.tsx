"use client"

import { cn } from "@/lib/utils";
import { AccountCircle, ArrowBackIos, ArrowDropDown, ArrowForwardIos, ChatBubble} from "@mui/icons-material";
import { ArrowLeft, ArrowRight, CircleDollarSign, MenuIcon  } from "lucide-react"
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";

import { useMediaQuery } from "usehooks-ts";

export const Navigation = () => {
    const pathname = usePathname();
    const isMobile = useMediaQuery("(max-width: 768px)");

    const isResizingRef = useRef(false);
    const sidebarRef = useRef<ElementRef<"aside">>(null);
    const navbarRef = useRef<ElementRef<"div">>(null);
    const [ isResetting, setIsResetting] = useState(false);
    const [ isCollapsed, setIsCollapsed] = useState(isMobile);

    useEffect (() => {
        if (isMobile) {
            collapse();
        } else {
            resetWidth();
        }
    }, [isMobile]);

    useEffect (() => {
        if(isMobile){
            collapse();
        }
    }, [pathname, isMobile]);

    const handleMouseDown = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.preventDefault();
        event.stopPropagation();

        isResizingRef.current = true;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (!isResizingRef.current) return;
        let newWidth = event.clientX;

        if (newWidth < 280) newWidth = 280;
        if (newWidth > 320) newWidth = 320;

        if (sidebarRef.current && navbarRef.current) {
            sidebarRef.current.style.width = `${newWidth}px`;
            navbarRef.current.style.setProperty("left", `${newWidth}px`);
            navbarRef.current.style.setProperty("width", `calc(100% - ${newWidth}px)`);
        }
    };

    const handleMouseUp = () => {
        isResizingRef.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    
    const resetWidth = () => {
        if (sidebarRef.current && navbarRef.current) {
          setIsCollapsed(false);
          setIsResetting(true);
    
          sidebarRef.current.style.width = isMobile ? "100%" : "280px";
          navbarRef.current.style.setProperty(
            "width",
            isMobile ? "0" : "calc(100% - 280px)"
          );
          navbarRef.current.style.setProperty(
            "left",
            isMobile ? "100%" : "280px"
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
      }
    
    return (
        <>
            <aside
                ref={sidebarRef}
                className="h-full bg-[#1E3A61] overflow-y-auto relative flex w-[280px] flex-col z-[9999] "
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
                <div className="flex items-center border-b-[1px] p-3 gap-4">
                    <AccountCircle className="text-white text-[40px]"/>
                    <div className="text-white text-[20px]">Hello User</div>
                </div>
                
                <div className="p-3 text-white text-[18px] flex flex-col gap-y-2">
                    <div className="flex ">
                        <div className="flex  gap-2 ">
                            <ChatBubble />
                            <p>Discussion Forum</p>
                        </div>
                        <ArrowDropDown className="ml-5"/>
                    </div>
                    
                    <div className="flex  gap-2 ">
                        <CircleDollarSign />
                        <p>Market Stories</p>
                    </div>

                    <div className="ml-[33px]">
                        <p>Sentiment</p>
                        <p className="my-2">Market</p>
                        <p className="my-2">Sector</p>
                        <p className="my-2">Watchlist</p>
                        <p className="my-2">Events</p>
                        <p className="my-2">News/Interview</p>
                    </div>
                </div>

                <div
                    onMouseDown={handleMouseDown }
                    onClick={resetWidth}
                    className="opacity-0 transtion cursor-ew-resize absolute h-full w-1 right-0 top-0 bg-slate-500"
                >
                </div>

            </aside>
            <div 
                ref={navbarRef}
                className={cn(
                    "absolute top-[50%] z-[99999] left-0 w-[calc(100%-240px)]",
                    isResetting && "transition-all ease-in-out duration-30",
                    isMobile && "left-0 w-full"
                )}
            >
                <div className="bg-transparent px-0 py-2 w-full">
                    {isCollapsed && <ArrowForwardIos onClick={resetWidth} role="button" className="h-[50px] w-[20px] text-muted-foreground bg-[#1E3A61] text-white" />}
                </div>
                    
            </div>
        </>
    )
}