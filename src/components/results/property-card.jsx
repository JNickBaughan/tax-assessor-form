import React from "react";

const PropertyCard = ({ address, taxId, selectProperty }) => {
  return (
    <div>
      <h1>{address}</h1>
      <button
        onClick={() => {
          selectProperty(taxId);
        }}
      >
        {taxId}
      </button>
    </div>
  );
};

export default PropertyCard;
