import React from "react";
import PropTypes from "prop-types";

const PopupBox = (props) => {
  let prefix = "";
  if (props.layerType != "Point") {
    prefix = "poly_";
  }
  return (
    <div className="popup-list">
      <div>
        <strong>Incident Name : </strong>
        {props.items[prefix + "IncidentName"]}
      </div>
      <div>
        <strong>Fire Cause : </strong>
        {props.items[prefix + "FireCause"]}
      </div>
      <div>
        <strong>Source : </strong>
        {props.items[prefix + "Source"]}
      </div>
    </div>
  );
};
PopupBox.propTypes = {
  items: PropTypes.object,
  layerType: PropTypes.string,
};
export default PopupBox;
