import React from "react";
import { Link } from "react-router-dom";


const HomePage: React.FC = () => {
  return <div style={{display: "flex", flexDirection: "column"}}>
    <h1>UI_Challenge</h1>
    <Link to={"/challenge/1"}><h2>challenge1</h2></Link>
    <Link to={"/challenge/2"}><h2>challenge2</h2></Link>
  </div>
}

export default HomePage;