import Feed from "../feed/Feed"
import "./main.css"
import {data} from "../../database"

export default function Main() {
  return (
    <div className="main">
      {data.map((d)=>(
        <Feed key={d.id} data={d}/>
      ))}
      </div>
  )
}

