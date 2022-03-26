import "./detFeed.css"
import { useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom"
export default function DetFeed(data) {
  let navigate = useNavigate();
  let {id} = useParams();
 
 for(let i in data){
   if(id == data[i].title){
  return (
    <>
    <div className="detFeed">
        <div className="detItems">
            <img src={data[i].urlToImage} alt="" />
            <div className="text">
                <div className="detup upper">
                    <h2 className="detH">{data[i].title}</h2>
                    <small className="categ">Category <span className="detbold"><b>{data[i].category}</b></span></small>
                </div>
                <p className="deP">{data[i].content}</p>
                <small className="deptl lowerb">Posted by: <b>{data[i].author}</b></small>
            </div>
        </div>
    </div>
    <div className="detShift">
        <button><h4>&#60; Previous</h4></button> 
        <button onClick={()=> navigate("/")}> <div id="num" >1</div></button>
        <button onClick={()=> navigate("/2")}> <div id="num">2</div></button>
        <button onClick={()=> navigate("/3")}> <div id="num">3</div></button>
        <button onClick={()=>navigate("/4")}> <div id="num">4</div></button>
        <button onClick={()=>navigate("/5")}> <div id="num">5</div></button>
     
        <button> <h4 className="nt">Next &#62;</h4></button>
    </div>
    <div className="space"></div>
  </>
  )
}
else{
  return null;
}
}
}

