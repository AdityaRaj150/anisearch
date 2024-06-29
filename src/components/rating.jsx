import sad from "../../public/rating-emoji/sad.png"
import neutral from "../../public/rating-emoji/neutral.png"
import happy from '../../public/rating-emoji/happy.png'
import smiley from "../../public/rating-emoji/smiley.png"

export default function Rating({ratingval}){
    const ratingPercentage = Math.ceil(ratingval)
    let imageSrc 
    let textStyle
    if(ratingPercentage>80) {
        imageSrc = smiley
        textStyle = "text-green-600 "
    }
    else if(ratingPercentage > 70) {
        imageSrc = happy
        textStyle = "text-cyan-500 "
    }
    else if(ratingPercentage > 65) 
        {
            imageSrc = neutral
            textStyle = "text-yellow-600 "
        }
    else {
        imageSrc = sad
        textStyle = "text-red-600 "
    }

    return<div className="flex gap-2 items-center">
        <img className="w-5 h-auto" src={imageSrc} />
        <h2 className={`${textStyle} font-bold`} >{ratingPercentage}%</h2>
    </div>

}