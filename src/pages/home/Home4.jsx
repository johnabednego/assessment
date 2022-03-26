import Main from "../../components/Main/Main"
import Quick from "../../components/quick/Quick"
import Shift from "../../components/shift/Shift"
import Topbar from "../../components/topbar/Topbar"
import "./home.css"


export default function Home4({input}) {      
  return (
      <>
    <Topbar/>
    <div className="homeContainer">
        <h1>NEWS & EVENTS</h1>
      <div className="main">
      <Quick data={input}/> 
      <Main data={input}/>
      <Shift/>    
     </div>
    
    </div>
    </>
  )
}
