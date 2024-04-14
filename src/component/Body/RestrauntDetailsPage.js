import { useEffect, useState } from "react";
import RestrauntDetailsHeader from "./RestrauntDetailsHeader";
import RestrauntDetailsBody from "./RestrauntDetailsBody";

const RestrauntDetailsPage = () => {
  const { restDetailsData, setRestDetailsData } = useState([]);
  useEffect(() => {
    fetchRestDetailsData();
  }, []);

  const fetchRestDetailsData = async () => {
    const requestUrl =
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.760317394658616&lng=80.20707555429111&restaurantId=410275";
    const response = await fetch(requestUrl);
    const json = await response.json();
    console.log("response==>", json);
  };

  return (
    <div className="rest-details-container">
      <div className="rest-details-breadcrumbs">breadcrumbs</div>
      <RestrauntDetailsHeader/>
      <RestrauntDetailsBody/>
      <div className="rest-menu">
        <h3></h3>
      </div>
    </div>
  );
};

export default RestrauntDetailsPage;
