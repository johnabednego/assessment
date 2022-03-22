import "./detFeed.css"
import { useParams} from "react-router-dom"
import {data} from "../../database"
let dt;
export default function DetFeed() {
  let {id} = useParams();
  let dat;
  let i =1;
  for(i in data){
    if(data[i].id == id){
       dat= data[i];
       dt=dat;
    }}

  return (
    <>
    <div className="detFeed">
        <div className="detItems">
            <img src={dt.img} alt="" />
            <div className="text">
                <div className="detup upper">
                    <h2 className="detH">{dt.title}</h2>
                    <small className="categ">Category <spand className="detbold"><b>{dt.category}</b></spand></small>
                </div>
                <p className="deP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed praesent odio risus dapibus. 
                Ipsum, euismod sem natoque volutpat malesuada adipiscing ornare molestie. 
                Praesent interdum egestas urna elementum pretium ut nisl sagittis, sagittis. 
                Semper donec fermentum tristique sed sollicitudin lacus parturient.</p>

                <p className="deP">Neque etiam cum feugiat tristique accumsan nisi. Dictum semper nisl tempus adipiscing eget nunc. 
                Morbi senectus massa sem id. Pulvinar interdum amet amet nunc amet. 
                Quis sit lobortis pulvinar dui nullam aliquam. Aenean enim aliquam scelerisque urna consequat mattis faucibus scelerisque. 
                Et, adipiscing sed molestie tortor, in augue.</p>

                <p className="deP">Sit amet vitae tristique dignissim amet. Leo congue et blandit lobortis. 
                Pretium est nunc aenean ullamcorper mauris, arcu dolor eu, pretium. In vestibulum duis id sed. Nulla urna libero vitae in. 
                Imperdiet neque, ut imperdiet tempus luctus. Adipiscing erat sit ut blandit. Auctor ultrices vestibulum ultricies nec nisi.
                </p>
                <small className="deptl lowerb">Posted by: <b>Ghana Lands</b></small>
            </div>
        </div>
    </div>
    <div className="detShift">
    <a href="/"><h4>&#60; Previous</h4></a>
          <a href="/1"><div id="num" >1</div></a>
          <a href="/2"><div id="num">2</div></a>
          <a href="/3"><div id="num">3</div></a>
          <a href="/4"><div id="num">4</div></a>
          <a href="/#"><div id="num">5</div></a>
     
          <a href="#"><h4 className="nt">Next &#62;</h4></a>
    </div>
    <div className="space"></div>
  </>
  )
}
