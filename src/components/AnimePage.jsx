import Rating from "./rating"
export default function ({data}){
    console.log(data)
    const attributes = data.attributes
    let coverImage = null
    if(attributes.coverImage) coverImage = attributes.coverImage.large
     
    const episodeCount = attributes.episodeCount
    const rating = attributes.averageRating
    const ageRating = attributes.ageRating //pg
    const ageRatingGuide = attributes.ageRatingGuide //13,16
    const description = attributes.description
    const episodeLength = attributes.episodeLength
    const popularityRank = attributes.popularityRank
    const ratingRank = attributes.ratingRank
    const showType = attributes.showType
    const synopsis = attributes.synopsis
    const status = attributes.status
    const posterImage = attributes.posterImage.large
    const animeTitle = attributes.canonicalTitle
    console.log(attributes)
    return(<>{coverImage &&  <div className="w-full" >
        <img src={coverImage} className="w-[100%]" />
    </div>}
           
            <div className="w-[90%] sm:w-[80%] flex flex-col gap-10 absolute top-[50%] sm:left-[10%] left-[5%]" >
                <div className="w-full items-center sm:items-end flex sm:flex-row flex-col justify-center gap-10 xl:gap-20" >
                    <img src={posterImage} className="rounded-lg w-52 lg:w-80 h-auto shadow-sm shadow-zinc-300 border border-stone-900" />
                    <h1 className="text-center bg-gradient-to-r from-orange-400 to bg-yellow-200 w-fit bg-clip-text text-transparent xl:text-7xl lg:text-5xl sm:text-4xl text-3xl" >{animeTitle}</h1>
                </div>
                <div className="flex gap-10 text-center flex-wrap justify-center text-stone-900 bg-zinc-100 p-10 rounded" >
                        <Rating ratingval={rating} />
                        <h1 className="px-2 py-1 rounded bg-zinc-300" >{episodeCount} Episodes</h1>
                        <h1 className="px-2 py-1 rounded bg-zinc-300" >{episodeLength} minutes per episode</h1>
                        <h1 className="px-2 py-1 rounded bg-zinc-300" >Popularity Rank: {popularityRank}</h1>
                        <h1 className="px-2 py-1 rounded bg-zinc-300" >ratingRank: {rating} </h1>
                        <h1 className="px-2 py-1 rounded bg-zinc-300" >{episodeCount} Episodes</h1>
                        <h1 className="px-2 py-1 rounded bg-zinc-300" >{episodeLength} minutes per episode</h1>
                        <h1 className="px-2 py-1 rounded bg-zinc-300" >{ageRating}/{ageRatingGuide}</h1>
                        <h1 className="px-2 py-1 rounded bg-zinc-300" >Popularity Rank: {popularityRank}</h1>
                        <h1 className="px-2 py-1 rounded bg-zinc-300" >Rating Rank: {ratingRank}</h1>
                        
                        <h1 className="px-2 py-1 rounded bg-zinc-300" >{showType}</h1>
                        <h1 className="px-2 py-1 rounded bg-zinc-300" >{status}</h1>
                </div>
         
            <section className="flex flex-col gap-10 bg-zinc-100 rounded p-10">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-medium" >Synopsis</h1>
                    <h2>{synopsis}</h2>
                </div>
                <div className="flex flex-col gap-5" >
                    <h1 className="text-3xl font-medium" >Description</h1>
                    <h2>{description}</h2>
                </div>
            </section>
            </div>
           
    </>)
}