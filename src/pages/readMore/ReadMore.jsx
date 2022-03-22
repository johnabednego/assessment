import Topbar from "../../components/topbar/Topbar"
import Quick from "../../components/quick/Quick"
import "./readMore.css"
import Details from "../../components/details/Details";
import { useNavigate} from "react-router-dom";

export default function ReadMore() {

  let navigate = useNavigate();
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <h1 id="small_h1">Land Registration In Ghana</h1>
        <div className="news">
        <small> <button className="click" onClick={()=>{navigate("/");}} >News & Events &#62;</button> <span id="small_bt">Land Registration In Ghana</span></small>
        </div>
        <Details />
        <Quick/>
    </div>
    </>
  )
}
