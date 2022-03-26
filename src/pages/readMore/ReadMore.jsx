import Topbar from "../../components/topbar/Topbar"
import "./readMore.css"
import Details from "../../components/details/Details";
import { useNavigate} from "react-router-dom";
import Quick from "../../components/quick/Quick";
let data;
export default function ReadMore({input}) {
  data = input.articles  
  let navigate = useNavigate();
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
       
        <h1 id="small_h1">Land Registration In Ghana</h1>
        <div className="news">
        <small> <button className="click" onClick={()=>{navigate(-1);}} >News & Events &#62;</button> <span id="small_bt">Land Registration In Ghana</span></small>
        </div>
    
        <Details data={data}/>
    </div>
    </>
  )
}
