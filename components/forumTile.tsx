"use client"

import { CommentOutlined, FavoriteBorder, Share, Visibility } from "@mui/icons-material"

export const ForumTile = ( ) => {
    return (
        <div className="border rounded-sm max-w-[50rem] p-3 mb-[25px] justify-center shadow-[4.0px_2.0px_8.0px_rgba(0,0,0,0.18)]">
            <div className="flex">
                <div className="w-[50px]">
                        <img  
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdpsO7bCr_BQtPvuwa58mo9hCZ5ebZqhVow&usqp=CAU"
                        alt="" 
                        className="border-[2px] rounded-[999px] w-[50px] h-[50px]"
                        />
                </div>
                <div className="ml-[10px]">
                    <div className="flex h-[50px] lg:w-[42rem] md:w-[20rem] sm:w-[10rem] justify-between items-center">
                        <div className="flex gap-3">
                            <p className="font-[600]">Satyanarayan Prashar</p>
                            <div className="h-[25px] bg-[#1E3A61] rounded-xl text-white px-3 text-[14px] flex items-center">Sector 2</div>
                        </div>
                        <p className="text-[blue] text-[14px]">2 min ago</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[50rem] text-start text-[14px] mt-[10px]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste optio quidem, commodi aspernatur ullam?</p>
            </div>
            <div className="text-[#424242] text-[14px] flex justify-between mt-[10px]">
                <div className="flex gap-1">
                    <FavoriteBorder/>
                    <p>2k</p>
                </div>
                <div className="flex gap-1">
                    <Visibility/>
                    <p>2k</p>
                </div>
                <div className="flex gap-1">
                    <CommentOutlined/>
                    <p>2k Comments</p>
                </div>
                <div className="flex gap-1">
                    <Share/>
                    <p>Share</p>
                </div>    
            </div>
        </div>
    )
}


// <div className=" flex text-start">
// <div >
//     <p className="font-[600]">Satyanarayan Prashar</p>
//     <div className="bg-blue text-white px-2 py-1">Sector 2</div>
//     <p className="text-blue text-[10px]">2 min ago</p>
// </div>
// </div>