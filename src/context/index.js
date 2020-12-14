import { createContext } from "react";

const StateContext = createContext({
  results: [],
  details: {},
  selectedTaxID: "",
  setResults: () => {},
  setDetails: () => {},
  setSelectedTaxID: () => {}
});

export default StateContext;
