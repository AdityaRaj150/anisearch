import usePagination from "../components/usePagination"
import Pagination from "../components/Pagination"
import AnimeBar from "../components/animeBar"
import { useEffect, useRef, useState } from "react"
import Header from "../components/Header"
import Filter from "../components/filter"
import AnimePage from "../components/AnimePage"

const URL = "https://kitsu.io/api/edge//anime?"
const ITEMS_PER_PAGE = 20

export default function Home(){
    const {isLoading, totalPages, CurrentPage, data, setCurrentPage} = usePagination(URL, ITEMS_PER_PAGE)
    const[index, setIndex] = useState(7)
    const [animeData , setAnimeData] = useState()
    const [showDetails, setShowDetails] = useState(false)
    const numOfAnimePanel = useRef()
    const psuedoindex = useRef()
    useEffect(()=> {
        const handleResize = ()=> {
            if(window.innerWidth > 1000 ){
                setIndex(5)
                numOfAnimePanel.current = []
                if(data.length > 0){
                    const num = Math.ceil(data.length/5)
                    for(let i=1; i<=num; i++){
                        numOfAnimePanel.current.push(i)
                    }
                }
               
            }
            else if(window.innerWidth > 800){
                setIndex(4)
                numOfAnimePanel.current = []
                if(data.length > 0){
                    const num = Math.ceil(data.length/4)
                    for(let i=1; i<=num; i++){
                        numOfAnimePanel.current.push(i)
                    }
                }
            }
            else {
                setIndex(2)
                numOfAnimePanel.current = []
                if(data.length > 0){
                    const num = Math.ceil(data.length/2)
                    for(let i=1; i<=num; i++){
                        numOfAnimePanel.current.push(i)
                    }
                }  
            }
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    },[data])


    psuedoindex.current = -index

    function showAnimeDetails(data){
      
        setShowDetails(true)
        setAnimeData(data)
    }
    function hideAnime(){
        setShowDetails(false)
    }
    return <>

    {!showDetails ?  <>
    <Header />
   {isLoading && <h1 className="text-zinc-200 text-xl flex justify-center py-10 w-full" >loading data....please wait</h1>}
    <div>
    
    <div className="flex flex-col justify-center items-center gap-6 w-full" >
        {
            index != 7 && numOfAnimePanel.current.map(number => {
            psuedoindex.current += index
            return (<div className="flex gap-6 xl:w-[80%] w-[95%] sm:w-[90%]" key={number}>
                {data.slice(psuedoindex.current, psuedoindex.current + index).map(item => <AnimeBar onClick={showAnimeDetails} key={item.id} data={item} />)}
                </div>)
        })}
        
    </div>
    <Pagination totalPages={totalPages} CurrentPage={CurrentPage} onChange={(number)=> {setCurrentPage(number)}} />
    </div> </>
    : <section className="relative" >
        <AnimePage data={animeData} />
        <div onClick={hideAnime} className="cursor-pointer py-2 px-4 rounded bg-yellow-300 text-stone-950 fixed top-5 left-5" >Go to Home Page</div>
    </section> }
   
    </>
}

