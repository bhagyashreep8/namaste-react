import { useState, useEffect } from "react";
import RestrauntCard from "./restrauntCard";
import SearchBar from "./searchBar";
import { IMG_URL } from "../../utils/constants";
import Shimmer from "../Shimmer";
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetchRestrauntList();
  }, []);

  const fetchRestrauntList = async () => {
    const requestUrl =
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update";
    const payload = {
      lat: 12.760317394658616,
      lng: 80.20707555429111,
      nextOffset: "COVCELQ4KIDI74G01tHVDzCnEzgC",
      widgetOffset: {
        NewListingView_Topical_Fullbleed: "",
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "100",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
      filters: {},
      seoParams: {
        seoUrl: "https://corsproxy.io/?https://www.swiggy.com/",
        pageType: "FOOD_HOMEPAGE",
        apiName: "FoodHomePage",
      },
      page_type: "DESKTOP_WEB_LISTING",
      _csrf: "iiUfs0xwQvBC-1rGZZRo_j9uNs27ene3qEP-F4Hg",
    };
    const requestBody = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    };
    const response = await fetch(requestUrl, requestBody);
    const result = await response.json();
    setListOfRestraunts(
      result?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    ); //optional chaining
    setFilteredResults(
      result?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const handleOnFilter = () => {
    const filteredRestraunts = listOfRestraunts.filter(
      (item) => item.info.avgRating > 4
    );
    setFilteredResults(filteredRestraunts);
  };

  const handleOnReset = () => {
    setFilteredResults(listOfRestraunts);
  };

  const handleOnChangeSearchInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    let searchResults = listOfRestraunts.filter((item)=>item.info.name.toUpperCase().includes(userInput.toUpperCase()))
    setFilteredResults(searchResults)
  };
  return filteredResults.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <SearchBar
        userInput={userInput}
        handleOnChangeSearchInput={handleOnChangeSearchInput}
        handleSearch={handleSearch}
      />
      <div className="filter">
        <button className="filter-btn" onClick={() => handleOnFilter()}>
          Top Rated Restraunts
        </button>
        <button className="filter-btn" onClick={() => handleOnReset()}>
          Reset
        </button>
      </div>
      <div className="rest-container">
        {filteredResults ? (
          filteredResults.map((item) => (
            <Link to="/restrauntDetails/410275" className="link">
              <RestrauntCard
              key={item.info.id}
              restrauntName={item.info.name}
              imgId={IMG_URL + item.info.cloudinaryImageId}
              locality={item.info.locality}
              cuisine={item.info.locality}
              stars={item.info.avgRating}
              time={item.info.sla.slaString}
              cuisines={item.info.cuisines.join(", ")}
            /></Link>
          ))
        ) : (
          <h5>Something went wrong !!</h5>
        )}
      </div>
    </div>
  );
};
export default Body;
