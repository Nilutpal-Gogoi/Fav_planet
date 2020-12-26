import React, {useState, useEffect} from 'react';
import './App.css';
import Tabnav from './Tabnav';
import Tab from './Tab';
import axios from "axios";

function App() {
  const [selected, setSelected] = useState("Planets")
  const [planets, setPlanets] = useState([])
  const [fav, setFav] = useState([])

  const fetchPlanet = () => {
      axios.get("https://assignment-machstatz.herokuapp.com/planet")
        .then(response => {
          setPlanets(response.data)
        })
        .catch(error => {
          console.log("Error!!!")
        })
  }

  useEffect(() => {
    fetchPlanet();
  }, [])

  const handleFav = (id) => {
    const existingfav = fav.find(planet => planet.id === id);
    if(!existingfav){
      const favplanet = planets.find(planet => planet.id === id);
      setFav([...fav, favplanet])  
    }else{
      const deleteplanet = fav.filter(planet => planet.id !== id)
      setFav(deleteplanet)
    }
  }


  var isFavourite = (id) => {
    const existingfav = fav.find(planet => planet.id === id);
    if (!existingfav) {
      return "black"
    }else{
      return "red"
    }
  }

  return (
    <div className="App">
      <video src="/videos/video-1.mp4" autoPlay loop muted></video>
      <Tabnav tabs={["Planets", "Favourite Planets"]} selected={selected} setSelected={setSelected}>
        <Tab isSelected={selected === "Planets"}>
            {
              planets.map(planet => {
                return(
                  <ul className="planet_ul" key={planet.id}>
                    <li className="planet_li" key={planets.id}
                    >{planet.name}</li>
                    <button className="button" onClick={() => handleFav(planet.id)}>
                      <i className={`fas fa-heart ${isFavourite(planet.id)}`}></i>
                    </button>
                  </ul>
                )
              })
            }
        </Tab>
        <Tab isSelected={selected === "Favourite Planets"}>
            { 
              fav && 
              fav.map(planet => {
                return(
                  <ul className="favplanet_ul" key={planet.id}>
                    <li className="favplanet_li" key={planets.id}
                    >{planet.name}</li>
                  </ul>
                )
              })
            }
        </Tab>
      </Tabnav>
    </div>
  );
}

export default App;
