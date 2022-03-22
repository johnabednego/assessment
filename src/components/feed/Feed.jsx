import "./feed.css"
import { useNavigate } from "react-router-dom";
export default function Feed({ data }) {
  let navigate = useNavigate();
  return (
    <div className="feed">
      <div className="items">
        <img src={data.img} alt="" />
        <div className="details">
          <div className="upper">
            <h2>{data.title}</h2>
            <small className="feedCate">Category <spand className="bold"><b>{data.category}</b></spand></small>
          </div>
          <p>{data.desc}</p>
          <div className="lower">
            <small className="lowerb feedCate">Posted by: <b>{data.posted_by}</b></small>
            <button onClick={() => { navigate("/" + data.id); }} > Read More...</button>
          </div>
        </div>
      </div>
    </div>
  )
}
