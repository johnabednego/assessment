import Feed from "../feed/Feed"
import "./main.css"
import { useState } from "react";
import { Search } from "@material-ui/icons";

export default function Main({ data }) {

  const [Seach, setSearch] = useState("");



  return (
    <div className="main">
      <div className="input">
        <input type="text" name="searchbar" id="searchbar" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
        <Search className="quick" color="disabled" />
      </div>
      {data.filter((val) => {
        if (Seach == "") {
          return val
        } else if (val.title.toLowerCase().includes(Seach.toLowerCase())) {
          return val
        }
      }).map((val, key)=>{
        return( <Feed key={key} data={val} />)
      })
    }
    </div>
  )
}

