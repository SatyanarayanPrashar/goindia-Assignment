"use client"

import { ForumTile } from "@/components/forumTile";
import { MarketStoryTile } from "@/components/marketStory";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const MarketingPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [activeTab, setActiveTab] = useState('disscussion');

  return (
    <div>
      <div className={cn("lg:hidden md:hidden sm:flex bg-[#1E3A61] h-[70px] w-full absolute top-0 text-white text-[19px] items-center justify-center")}>
        <div className="flex w-[100%]">
          <div 
            role="button"
            className={`w-[50%] h-[70px] flex items-center justify-center cursor-pointer ${activeTab === 'disscussion' ? 'border-b-[4px] border-red-500' : ''}`}
            onClick={ ()=>{
              setActiveTab('disscussion');
            }
          }>Discussion Fourm</div>
          <div 
            role="button"
            className={`w-[50%] h-[70px] flex items-center justify-center cursor-pointer ${activeTab === 'market' ? 'border-b-[4px] border-red-500' : ''}`}
            onClick={ ()=>{
              setActiveTab('market');
            }
          }>Market Stories</div>
        </div>
      </div>
      <div className={cn(
        "min-h-full lg:flex md:block sm:block justify-center gap-10 mt-7",
        isMobile && "mt-[6rem]"
      )}>
        <div className={
          isMobile ? activeTab=="disscussion" ? "flex" : "hidden" : "flex flex-col"
        }>
          <p className={isMobile ? "hidden" : "text-[red] text-[20px] ml-[5px]"}>DISSCUSSION FOURAM</p>
          <ForumTile />
        </div>
        <div className={
          isMobile ? activeTab=="market" ? "flex" : "hidden" : "flex flex-col"
        }>
          <p className={isMobile ? "hidden" : "text-[red] text-[20px] ml-[5px]"}>MARKET STORIES</p>
          <MarketStoryTile />
        </div>
      </div>
    </div>
  );
}

export default MarketingPage;