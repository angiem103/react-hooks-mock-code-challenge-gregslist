import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onListingDelete, currentSearch}) {

  const filteredListings = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(currentSearch.toLowerCase())
  })

  return (
    <main>
      <ul className="cards">
        {filteredListings.map(listing => <ListingCard listing={listing} key={listing.id} onListingDelete={onListingDelete}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
