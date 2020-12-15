import React, { useState, useEffect } from "react";
import styled from "styled-components";

import TaxSheet from "../components/tax-sheet";
import PropertyCard from "../components/results/property-card";
import { resultsData } from "../mock-state/results";
import StateContext from "../context";

const Grid = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 8fr;
  column-gap: 3px;
  grid-template-areas:
    "search details details details details"
    "results details details details details";
`;

const ResultsPanel = styled.div`
  grid-area: results;
  height: 100%;
  width: 100%;
`;

const SearchPanel = styled.div`
  grid-area: search;
  height: 100%;
  width: 100%;
  border-bottom: 3px solid black;
`;

const DetailsPanel = styled.div`
  grid-area: details;
  height: 100%;
  width: 100%;
  border-left: 3px solid black;
`;

const TaxAssessorContainer = () => {
  const [results, setResults] = useState([]);
  const [selectedTaxID, setSelectedTaxID] = useState("");
  const [details, setDetails] = useState({});

  useEffect(() => {
    // TODO: setup graphQL and make call here
    setResults(resultsData);
  }, []);

  const selectProperty = (taxId) => {
    setSelectedTaxID(taxId);
    const selected = results.findIndex((p) => p.taxId === taxId);
    if (selected > -1) {
      setDetails(results[selected]);
    }
  };

  return (
    <StateContext.Provider
      value={{
        results,
        selectedTaxID,
        details,
        setDetails,
        selectProperty,
        setResults
      }}
    >
      <Grid>
        <ResultsPanel>
          {results.map((results) => {
            return (
              <PropertyCard
                selectProperty={selectProperty}
                address={results.address}
                taxId={results.taxId}
              />
            );
          })}
        </ResultsPanel>
        <SearchPanel></SearchPanel>
        <DetailsPanel>
          <TaxSheet />
        </DetailsPanel>
      </Grid>
    </StateContext.Provider>
  );
};

export default TaxAssessorContainer;
