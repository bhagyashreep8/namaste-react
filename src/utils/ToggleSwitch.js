
const ToggleSwitch = (props) => {
    const{isVeg, handleToggle}=props
  return (
    <div className="toggle-switch-container">
      <label className={`toggle-label ${isVeg ? 'veg' : 'nonveg'}`}>
        {isVeg ? 'Veg' : 'Non-Veg'}
      </label>
      <div className="toggle-switch" onClick={handleToggle}>
        <div className={`slider ${isVeg ? 'veg' : 'nonveg'}`}></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;