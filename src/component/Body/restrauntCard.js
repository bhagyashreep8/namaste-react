const RestrauntCard = (props) => {
  const { imgId, restrauntName, stars, time, cuisines } = props;
  return (
    <div className="rest-card">
      <img className="rest-img" src={imgId} />{" "}
      <h3 className="restraunt-container-heading"> {restrauntName} </h3>{" "}
      <div className="sub-title">
        <h4 className="ratings">
          {" "}
          {stars}
          stars{" "}
        </h4>{" "}
        <h4 className="time"> {time} </h4>{" "}
      </div>{" "}
      <h4 className="cuisine"> {cuisines} </h4>{" "}
    </div>
  );
};
export default RestrauntCard;
