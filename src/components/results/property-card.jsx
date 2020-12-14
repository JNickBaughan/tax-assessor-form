import React from "react";

const PropertyCard = ({ address, taxId, setSelectedTaxID }) => {
  return (
    <div>
      <h1>{address}</h1>
      <button
        onClick={() => {
          setSelectedTaxID(taxId);
        }}
      >
        {taxId}
      </button>
    </div>
  );
};

export default PropertyCard;
