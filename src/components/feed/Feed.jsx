import "./feed.css"
import { useNavigate } from "react-router-dom";
export default function Feed(data) {
  let navigate = useNavigate();
  for (let i in data) {
    function doAll() {
      navigate("/" + data[i].title)
    }
    return (

      <>
      <div className="feed">
        <div className="items">
          <img src={data[i].urlToImage} alt="" />
          <div className="details">
            <div className="upper">
              <h2>{data[i].title}</h2>
              <small className="feedCate">Category <span className="bold"><b>{data[i].category}</b></span></small>
            </div>
            <p>{data[i].description}</p>
            <div className="lower">
              <small className="lowerb feedCate">Posted by: <b>{data[i].author}</b></small>
              <button onClick={() => doAll()} > Read More...</button>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
