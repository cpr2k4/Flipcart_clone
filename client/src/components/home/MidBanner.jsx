import { imageURL } from "../../constants/data"
import "../../style/HomeStyle.css"

const MidBanner = () => {
  return (
    <div className="midBanner">
      {
        imageURL.map((poster,idx)=>(
            <img src={poster} alt="poster_image" key={idx}/>
        ))
      }
    </div>
  )
}

export default MidBanner
