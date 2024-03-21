"use client"

export const MarketStoryTile = ( ) => {
    return (
        <div className="flex flex-col border rounded-sm justify-center mb-[25px]">
           <div className="w-[220px]">
                <img  
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPr1tQMjJdgDqD4ye9zFVDUJP3DYkxIHrNXq0zXVDpdg&s"
                alt="" 
                className="w-[220px] h-[140px]"
            />
            </div>
            <div className="p-3 w-[220px]">
                <p className="text-[15px] font-[600]">The coldest Sunset</p>
                <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae omnis sequi nisi et aspernatur sapiente consectetur amet unde quod?</p>
            </div>
        </div>
    )
}