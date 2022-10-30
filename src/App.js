import React, { useState, useEffect } from "react";
import axios from 'axios';


import "./App.css";

import NasaPhoto from "./COMPONENTS/NasaPhoto";

// const dummyData = { //** used this dummy data to ensure everything works before using API */
//   date: "2022-10-26",
//   explanation: "When does a nebula look like a comet?  In this crowded starfield, covering over two degrees within the high flying constellation of the Swan (Cygnus), the eye is drawn to the Cocoon Nebula. A compact star forming region, the cosmic Cocoon punctuates a nebula bright in emission and reflection on the left, with a long trail of interstellar dust clouds to the right, making the entire complex appear a bit like a comet. Cataloged as IC 5146, the central bright head of the nebula spans about 10 light years, while the dark dusty tail spans nearly 100 light years.  Both are located about 2,500 light years away. The bright star near the bright nebula's center, likely only a few hundred thousand years old, supplies power to the nebular glow as it helps clear out a cavity in the molecular cloud's star forming dust and gas. The long dusty filaments of the tail, although dark in this visible light image, are themselves hiding stars in the process of formation, stars that can be seen at infrared wavelengths.",
//   hdurl: "https://apod.nasa.gov/apod/image/2210/CocoonWide_Ermolli_5937.jpg",
//   title: "Cocoon Nebula Wide Field"
// }

function App() {
  const [nasaData, setNasaData] = useState();



  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setNasaData(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  }, [])

  return (
    <div className="App">
      { nasaData && <NasaPhoto photo={nasaData} /> }
    </div>
  );
}

export default App;




