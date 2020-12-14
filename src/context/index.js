import { createContext } from "react";

const StateContext = createContext({
  results: [],
  details: {},
  selectedTaxID: "",
  setResults: () => {},
  setDetails: () => {},
  selectProperty: () => {}
});

export default StateContext;
