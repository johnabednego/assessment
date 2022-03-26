import "./quick.css"
import { useNavigate } from "react-router-dom";
export default function Quick({data}) {


  let navigate = useNavigate();
  for(let i in data){

    function doAll() {
      navigate("/" + data[i].title)
    }
  return (
    <div className="search">
        <div className="category">
          <h3>Categories</h3><hr></hr>
          <div className="set">General News</div><hr></hr>
          <div className="set">Lands & Properties</div><hr></hr>
          <div className="set">Finance & Economy</div><hr></hr>
          <h3>Recent Post</h3><hr></hr>
          <div onClick={() => doAll()} className="rec">{data[i].title}</div><hr></hr>
        </div>
    </div>
  )
}
}
