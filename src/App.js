import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

import icecreamData from "./assets/icecream-data.json";
import IcecreamItem from "./components/IcecreamItem";
import FavoriteList from "./components/FavoriteList";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
icecreamData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cartState, setCartState] = useState([])
  function getIcecream() {
    const icecreamList = icecreamData;
    return icecreamList;
  }

  //Filtering the ice cream falvors

  const [filteredIcecream, setFilteredIcecream] = useState(null);
  const [filteredCategory, setFilteredCategory] = useState("all");
  const [filteredLocal, setFilteredLocal] = useState("all");
  useEffect(() => {
    const filterByCategory = selectedCategoryFilter(getIcecream())
    const filteredByLocal = selectedLocalFilter(filterByCategory)

    setFilteredIcecream(filteredByLocal)
  }, [filteredCategory, filteredLocal]);

  //Filtering by Icecream Type
  function selectedCategoryFilter(data) {
    if (filteredCategory === "all") {
      const copy = [...icecreamData]
      return copy;
    } else {
      let filteredCategoryResult = data.filter(type => type.category === filteredCategory)
      return filteredCategoryResult
    }
  }

  //Filtering by Source
  function selectedLocalFilter(data) {
    if (filteredLocal === "all") {
      if (filteredCategory === "all") {
        const copy = [...icecreamData]
        return copy;
      } else {
        let filteredLocalResult = selectedCategoryFilter(getIcecream())
        return filteredLocalResult
      }
    } else {
      let filteredLocalResult = data.filter(type => type.source === filteredLocal)
      return filteredLocalResult
    }
  }


  function handleIcecream(e) {
    let icecreamType = e.target.value;
    setFilteredCategory(icecreamType)
  }


  function handleSourcingIcecream(e) {
    let icecreamType = e.target.value;
    setFilteredLocal(icecreamType);
  }

  //Sorting by Price
  function sortPrices(e) {
    let sortBy = e.target.value;
    sortBy !== "all"
      ? setFilteredIcecream(sortByPricing(sortBy))
      : setFilteredIcecream(getIcecream());
  }

  function sortByPricing(sortBy) {
    const copy = [...filteredIcecream]
    if (sortBy === "ascending") {
      return copy.sort((a, b) => a.price - b.price);
    } else {
      return copy.sort((a, b) => b.price - a.price);
    }
  }

  //Add to Favorites
  function addtoFavorites(item) {
    if (cartState.filter(e => e.text === item.name).length > 0) {
      const newArray = cartState.filter(e => e.text !== item.name)
      setCartState(newArray)
    } else {
      setCartState([...cartState, { text: item.name, price: item.price, key: Date.now() }])
    }
    if (item.buttontext === "Add to Favorites") {
      item.buttontext = "Remove from Favorites";
    } else {
      item.buttontext = "Add to Favorites";
    }
  }

  //Radio Buttons
  const buttons = [
    {
      name: "All Flavors",
      value: "all"
    },
    {
      name: "Fruit Flavors",
      value: "fruit"
    },
    {
      name: "Custard Flavors",
      value: "custard"
    }
  ]

  const originButtons = [
    {
      name: "All Flavors",
      value: "all"
    },
    {
      name: "Made in House",
      value: "in-house"
    },
    {
      name: "Vendors",
      value: "vendors"
    }
  ]

  const sortButtons = [
    {
      name: "Default",
      value: "all"
    },
    {
      name: "Least Expensive",
      value: "ascending"
    },
    {
      name: "Most Expensive",
      value: "descending"
    }
  ]




  return (
    <div className="App">
      <main>
        <h1>Dessert Shop</h1> 
        <body>
          <div className="main-content">
            <div className="left-bar">
              <p><b>Ice Cream Type</b></p>
              {buttons &&
                buttons.map((type, index) => (
                  <>
                    <div>
                      <input type="radio" name="icecreamType" key={index} value={type.value} onClick={handleIcecream} /> {type.name}
                    </div>
                  </>
                ))}
              <br></br>

              <p><b>Ice Cream Source</b></p>
              {originButtons &&
                originButtons.map((type, index) => (
                  <>
                    <div>
                      <input type="radio" name="sourceType" key={index} value={type.value} onClick={handleSourcingIcecream} /> {type.name}
                    </div>

                  </>
                ))}
              <br>
              </br>
              <p><b>Sort by</b></p>
              {sortButtons &&
                sortButtons.map((type, index) => (
                  <>
                    <div>
                      <input type="radio" name="sorting" key={index} value={type.value} onClick={sortPrices} />{type.name}
                    </div>
                  </>
                ))}

            </div>

            <div className="d-flex">
              {filteredIcecream &&
                filteredIcecream.map((item) => (
                  <IcecreamItem item={item} addtoFavorites={addtoFavorites} />
                ))}
            </div>
            <div className="right-bar">
              <h2>Favorites</h2>
              <FavoriteList cartState={cartState} />
            </div>
          </div>
        </body>
      </main>
    </div>
  );
}

export default App;
