
import { useState } from "react"
import Rating from "./rating"

export default function AnimeBar({data, onClick}){


    const attributes = data.attributes
    const posterImage = attributes.posterImage.small
    const [isHovered, setIsHovered] = useState(false)
  
    const episodeCount = attributes.episodeCount
    const rating = attributes.averageRating
    const showType = attributes.showType
    const status = attributes.status
    
    function handleHover(val){
        if(val == "enter"){
            setIsHovered(true)
        }
        else setIsHovered(false)
    }

    const handleClick = () => {
       onClick(data)
    }
   
  
    const animeTitle = attributes.canonicalTitle
    return (<div onClick={handleClick} onMouseEnter={()=> handleHover("enter")} onMouseLeave={()=> handleHover("leave")} className="relative  bg-zinc-200 rounded-lg w-1/5 flex justify-center items-center flex-col flex-auto cursor-pointer hover:scale-x-110 duration-200 ease-linear " >
        <div className="overflow-hidden w-[85%] h-[70%] shadow-md shadow-stone-700">
            <img className="rounded w-full h-full " src={posterImage} />
        </div>
        <div className="w-[85%] h-[25%]" >
            <h2 className="h-[95%] sm:h-[90%] w-full text-center text-xs lg:text-sm xl:text-lg min-[2000px]:text-2xl flex justify-center items-center" >{animeTitle}</h2>
        </div>
        <div className="w-2 h-2 absolute top-2 right-2 bg-yellow-500 border border-stone-500 rounded-full shadow shadow-stone-800 " ></div>
       {isHovered &&  
       <div className="absolute top-4 left-[-20%] py-5 px-10 flex flex-col gap-3 max-w-[100%] bg-zinc-100 rounded-lg shadow-md shadow-stone-700" >
            <h2 className="text-orange-800 font-me" >{animeTitle}</h2>
            <h3>episodeCount: {episodeCount}</h3>
            <Rating ratingval={rating} />
            <h3 className="text-yellow-800 font-medium" > {showType}</h3>
            <h3 className="rounded px-2 py-1 w-fit border border-zinc-400 bg-zinc-300" >{status}</h3>
        </div>}
    </div>)

}