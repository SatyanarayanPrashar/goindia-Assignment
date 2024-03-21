import { ForumTile } from "@/components/forumTile";
import { MarketStoryTile } from "@/components/marketStory";

const MarketingPage = () => {
  return (
    <div className="min-h-full lg:flex md:block sm:block justify-center gap-10">
      <div className="flex flex-col mt-[3rem]">
        <ForumTile />
        <ForumTile />
      </div>
      <div className="flex flex-col mt-[3rem]">
        <MarketStoryTile />
      </div>
    </div>
  );
}

export default MarketingPage;