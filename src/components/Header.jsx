import logoImg from "../../public/final.svg"
export default function Header(){
    return <div className="w-full h-[15vh] my-5 flex justify-center items-center" >
            <img src={logoImg} />
            <h1 className="text-5xl lg:text-6xl bg-gradient-to-r from-orange-400 to bg-yellow-200 w-fit bg-clip-text text-transparent" >AniSearch</h1>
    </div>
}