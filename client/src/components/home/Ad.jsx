import { adURL } from "../../constants/data"
import "../../style/HomeStyle.css"
const Ad = () => {
  return (
    <div className="ad">
        <img src={adURL} alt="ad_image"/>
    </div>
  )
}

export default Ad
