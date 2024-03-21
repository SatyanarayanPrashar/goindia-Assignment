"use client"
import { useMediaQuery } from "usehooks-ts";

interface Story {
    title: string | null;
    desc: string | null;
}

export const MarketStoryTile = ( {story}:{story: Story} ) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className={isMobile? "mr-[1rem] mx-4 " : "max-w-[20rem] flex flex-col border rounded-sm justify-center mb-[25px] mr-[5rem]"}>
           <div className="w-full">
                <img  
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPr1tQMjJdgDqD4ye9zFVDUJP3DYkxIHrNXq0zXVDpdg&s"
                alt="" 
                className="w-full h-[240px]"
            />
            </div>
            <div className="p-3">
                <p className="text-[15px] font-[600]">{story.title}</p>
                <p className="text-[14px]">{story.desc}</p>
            </div>
        </div>
    )
}