import React, { useState } from "react";
import axios from "axios";
import Wallpaper from "./Wallpaper";
import "./Motivate.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Inspirational = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState([]);
  const [changeColor, setChangeColor] = useState("#4DB6AC");

  const handleClick = () => {
    setQuote(quotes);
  };

  const handleQuote = async (num) => {
    const newQuotes = [];
    while (newQuotes.length < num) {
      const res = await axios.get("https://api.quotable.io/random");
      const quote = res.data.content;
      if (!newQuotes.includes(quote)) {
        newQuotes.push(quote);
      }
    }
    setQuotes(newQuotes);
    const randomColors = "#" + Math.random().toString(16).slice(2, 8);
    setChangeColor(randomColors);
  };

  return (
    <div>
    <div
      style={{
        border: "5px solid black",
        // marginTop: "50px",
        // width: "1600px",
        height: "100vh",
        backgroundColor: `${changeColor}`,
      }}
      
    >
      <header>
        <p>Quote generator</p>
      </header>
      <div className="box">
        <i className="fas fa-quote-left fa2"></i>
        <div className="text">
          <i className="fas fa-quote-right fa1"></i>
          <div>
            <h3>Quote of the Day</h3>
            {quotes.map((quote, index) => (
              <p key={index}>{quote}</p>
            ))}
          </div>
        </div>
      </div>
      <center> <div style={{marginLeft:"5%",marginBottom:"5%"}}>
              <input type="number" min="1" onChange={(e) => handleQuote(e.target.value)} style={{height:"30px",width:"50px",border:"3px solid black"}} /><span>  </span>
             <button style={{ backgroundColor: `${changeColor}`,height:"50px",width:"80px",border:"3px solid black",marginTop:"10%"}} onClick={() => handleQuote(1)}>
                Next
              </button>
             
              <button style={{ backgroundColor: `${changeColor}`,height:"50px",width:"120px",border:"3px solid black" }} onClick={handleClick}>
                Generate
              </button>
            </div>
            </center>
            <footer style={{marginTop:"17%"}}>
                <p>
                  @ CopyRights Reserved
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <InstagramIcon icon={InstagramIcon} style={{marginLeft:"10px",color:"white"}} />
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <TwitterIcon icon={TwitterIcon} style={{marginLeft:"10px",color:"white"}} />
    </a>
                </p>
              </footer>
            </div>
              <div className="two">
              <Wallpaper text={quote} />
              <a href="http://localhost:3000/Inspirational" download>
              <button style={{ backgroundColor:"transparent",height:"70px",width:"120px",border:"3px solid black"}}>Dowload image</button>
              </a>
              </div>
    </div>
  );
};

export default Inspirational;