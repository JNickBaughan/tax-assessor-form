import React, { useState } from "react";
import styled from "styled-components";
import TaxSheet from "../components/tax-sheet";

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
  return (
    <Grid>
      <ResultsPanel></ResultsPanel>
      <SearchPanel></SearchPanel>
      <DetailsPanel>
        <TaxSheet />
      </DetailsPanel>
    </Grid>
  );
};

export default TaxAssessorContainer;
