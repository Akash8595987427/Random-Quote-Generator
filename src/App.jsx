import React, {useEffect, useState} from "react";
import "./App.css"





const App=()=>{

  const [quote, setQuote] = useState({});



  const getApiData=async()=>{
    const data = await fetch("https://type.fit/api/quotes");
    const actualData = await data.json();

    setQuote(actualData[Math.floor(Math.random()*actualData.length)]);
    console.log(quote);
  }

  const handleTwitter=()=>{
    window.open(`https://twitter.com/intent/tweet?text=${quote.text}`);
    console.log(quote.text);
  }
      
  return(
    <>
      <div className="container w-full h-[100vh] bg-blue-950 flex justify-center items-center">
          <div className="quotes_box w-[50%] h-[40%] bg-violet-500 rounded-lg flex flex-col justify-center items-center gap-4">


              <div className="quotes text-2xl text-center text-white"> {quote.text} </div>
              
              <div className="line w-[80%] h-0.5 mt-6 bg-white "></div>

              <div className="bottom flex w-full justify-start">
              <div className="quotes_author w-[80%] text-white px-12"> {quote.author} </div>
              <div className="icons w-[20%] flex gap-8">
              
                <img onClick={getApiData} className="w-6 h-6" src="/img/reload_icon.jpg" alt="reload_img" />
                <img onClick={handleTwitter} className="w-6 h-6" src="/img/twitter_icon.png" alt="twitter_img" />
              </div>
             
              </div>

            {useEffect(() => {
                getApiData();
            }, [])}
          </div>
      </div>


    </>
  )
}

export default App;