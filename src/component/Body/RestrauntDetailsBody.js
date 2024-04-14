import { useState } from "react";
import ToggleSwitch from "../../utils/ToggleSwitch";
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionHeader from 'react-bootstrap/AccordionHeader'
import AccordionBody from 'react-bootstrap/AccordionBody'
import RestrauntDetailsAccordionBodyItem from "./RestrauntDetailsAccordionBodyItem";

const RestrauntDetailsBody = () => {
  const [isVeg, setIsVeg] = useState(true);

  const handleToggle = () => {
    setIsVeg(!isVeg);
  };
  const onChangeDropdown = () => {};
  const options = [<h3>cATE</h3>,<h3>CAT2</h3>];
  const defaultOption = options[0];
  return (
    <div className="rest-body">
      <ToggleSwitch handleToggle={handleToggle} isVeg={isVeg} />
      <div className="styles-divider"></div>
        <div className="food-container">
    <Accordion defaultActiveKey="0" flush>
      <AccordionItem eventKey="0">
        <AccordionHeader bs-prefix="accordion-header">Recommended (20)</AccordionHeader>
        <AccordionBody>
          <RestrauntDetailsAccordionBodyItem/>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
      </div>
    </div>
  );
};
export default RestrauntDetailsBody;
