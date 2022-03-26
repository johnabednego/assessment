import Home from "./pages/home/Home";
import ReadMore from "./pages/readMore/ReadMore";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";
import React from "react";
import Home2 from "./pages/home/Home2";
import Home3 from "./pages/home/Home3";
import Home4 from "./pages/home/Home4";
import Home5 from "./pages/home/Home5";

const baseURL = 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=843d07de238d43138035a85f92b11b2f'


function App() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    // invalid url will trigger an 404 error
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);
  let dat1;
  let dat2;
  let dat3;
  let dat4;
  let dat5;
  if (error) return `Error: ${error.message}`;
  if (!post) return "Please wait!!"
  for(let i in post.articles){
    if(i.length <=4){
      dat1 = post.articles.slice(0, 5)
      dat2 = post.articles.slice(5, 10)
      dat3 = post.articles.slice(10, 15)
      dat4 = post.articles.slice(15, 20)
      dat5 = post.articles.slice(4, 9)
    }
  }

  return <Router>
          <Routes>
            <Route path="/" element={<Home input={dat1}/>} ></Route>
            <Route path="/:id" element={<ReadMore input={post} />} ></Route>
            <Route path="/2" element={<Home2 input={dat2}/>} ></Route>
            <Route path="/3" element={<Home3 input={dat3}/>} ></Route>
            <Route path="/4" element={<Home4 input={dat4}/>} ></Route>
            <Route path="/5" element={<Home5 input={dat5}/>} ></Route>
          </Routes>
        </Router>;
}

export default App;


