export default function FilterBar({text}){
    return(  <div className="flex flex-col gap-2 w-1/6 overflow-hidden">
        <label >{text}</label>
        <div className="bg-zinc-200 p-2 rounded shadow-md h-10 shadow-slate-100" >
        <div className="bg-zinc-200 focus:outline-none p-1 h-full flex items-center rounded text-stone-900 ">any</div>
        </div>
        
    </div>)
}