import { useState } from "react"

export default function Pagination({totalPages, CurrentPage, onChange,}){
    const[starting, setStarting] = useState(1)
    const listStyle = " rounded-full flex justify-center items-center px-3 py-2 box-border aspect-square border opacity-85 hover:border-stone-900 hover:opacity-100 cursor-pointer"
    let pages = []
    let count = 0
    
    for(let i=starting; i<=totalPages; i++){
        count += 1
        if(count>4) break
        pages.push(i)
    }
    function handleClickOnArrows(value){
        if(value == "prev"){
            if(starting <= 1) return
            else {
                setStarting(starting => starting-1)
                onChange(starting-1)
            }
        }
        else {
            if(starting+3 >= totalPages) return
            else {
                setStarting(starting => starting+1)
                onChange(starting+4)
            }
        }
    }
    return(<nav className="bg-stone-900 p-5 text-xs ">
        <ul className="flex text-slate-100 gap-2 justify-center items-center" >
            <li onClick={()=> handleClickOnArrows("prev")}  className={`${listStyle} ${starting > 1 ? "opacity-100": "opacity-50"}`}>{"<<"}</li>
            {pages.map(number => <li className={`${number == CurrentPage? "bg-stone-800 opacity-100 text-slate-100"+listStyle: "bg-zinc-300 text-stone-900"+listStyle}`}  onClick={()=> onChange(number)} key={number}>{number}</li>)}
            <li onClick={() => handleClickOnArrows("next") } className={`${listStyle} ${starting+3 == totalPages ? "opacity-50": "opacity-100"}`}>{">>"}</li>
        </ul>
    </nav>)
}