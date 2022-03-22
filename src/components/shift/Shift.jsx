import "./shift.css"
import {ArrowBackIos,ArrowForwardIos} from "@material-ui/icons";
export default function Shift() {
  return (
    <div className="shift">
   
      <a href="https://www.google.com"><h4><ArrowBackIos className="arr back" fontSize="small"/>Previous</h4></a>
          <a href="#"><div id="num" >1</div></a>
          <a href="#"><div id="num">2</div></a>
          <a href="#"><div id="num">3</div></a>
          <a href="#"><div id="num">4</div></a>
          <a href="#"><div id="num">5</div></a>
     
          <a href="#"><h4 className="nt">Next<ArrowForwardIos className="arr" fontSize="small"/></h4></a>
 
    </div>
  )
}


