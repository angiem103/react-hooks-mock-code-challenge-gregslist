import React, { useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [currentSearch, setCurrentSearch] = useState ("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listings => setListings(listings))
  },[])

  function deleteListing(deletedListing){
    const updatedListings = listings.filter((listing) => {
      return listing.id !== deletedListing.id
    })

    setListings(updatedListings)
  }

  function handleSearch(search){
   setCurrentSearch(search)   

}

  

  return (
    <div className="app">
      <Header onListingSearch={handleSearch}/>
      <ListingsContainer listings={listings} onListingDelete={deleteListing} currentSearch={currentSearch}/>
    </div>
  );
}

export default App;
