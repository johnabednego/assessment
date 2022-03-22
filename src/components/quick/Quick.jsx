import "./quick.css"
import {Search} from "@material-ui/icons";
export default function Quick() {
  return (
    <div className="search">
     
        <div className="input">
          <input type="text" name="searchbar" id="searchbar" placeholder="Search..."/>
          <Search className="quick" color="disabled"/>
        </div>
        <div className="category">
          <h3>Categories</h3><hr></hr>
          <div className="set">General News</div><hr></hr>
          <div className="set">Lands & Properties</div><hr></hr>
          <div className="set">Finance & Economy</div><hr></hr>
          <h3>Recent Post</h3><hr></hr>
          <div className="rec">Financing your properties with mortgages in Ghana</div><hr></hr>
          <div className="rec">Things to know when buying a property in Ghana 2021</div><hr></hr>
          <div className="rec">Property Tax</div><hr></hr>
        </div>
    </div>
  )
}
