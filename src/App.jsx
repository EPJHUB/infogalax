import "./App.css";
import AuthorCard from "./components/AuthorCard";
import Card from "./components/Card";
import {useState } from "react";
function App() {
  let bgValue = 1
  const [bg, setBg] = useState(bgValue)
  function refreshed () {
    if (bgValue <= 4){
      setBg(bgValue)
      bgValue = bgValue + 1
    }
    else{
      setBg(bgValue)
      bgValue = 1
    }
  }
  console.log(bg)
  return (
    <>
      <div className={`main-container bg${bg}`}>
        <h1 className="main-title">INFOGALX</h1>
        <div className="card-container">
          <Card fnRefreshed={refreshed}/>
        </div>
        <AuthorCard />
      </div>
    </>
  );
}

export default App;
