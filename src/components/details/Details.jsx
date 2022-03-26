import DetFeed from "../detFeed/DetFeed"
import "./details.css"
export default function Details({data}) {
  return (
    <div className="main">
         {data.map((d)=>{
        return <DetFeed key ={d.title} data={d}/>
      })}
    </div>
  )
}
