import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import BaseDetails from "../components/details/base";
import StateContext from "../context";

const Grids = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 3px;
  grid-template-areas:
    "base residential"
    "transfers transfers"
    "assessment assessment";
`;

const BasePanel = styled.div`
  grid-area: base;
  height: 100%;
  width: 100%;
  padding: 0 3em;
`;

const ResidentialPanel = styled.div`
  grid-area: residential;
  height: 100%;
  width: 100%;
  background-color: blue;
`;

const AssessmentPanel = styled.div`
  grid-area: assessment;
  height: 100%;
  width: 100%;
  background-color: orange;
`;

const TransferPanel = styled.div`
  grid-area: transfers;
  height: 100%;
  width: 100%;
  background-color: green;
`;

const TaxSheet = () => {
  const { selectedTaxID, details, results, setResults } = React.useContext(
    StateContext
  );

  const formik = useFormik({
    initialValues: { ...details },
    enableReinitialize: true,
    handleChange: (event) => {
      setDetails((prevDetails) => ({
        ...prevDetails,
        [event.target.name]: event.target.value
      }));
    },
    onSubmit: (values) => {
      setResults(
        results.map((result) => {
          return result.taxId === selectedTaxID ? values : result;
        })
      );
    }
  });

  return selectedTaxID !== "" ? (
    <Grids>
      <BasePanel>
        <BaseDetails formik={formik} />
      </BasePanel>
      <ResidentialPanel></ResidentialPanel>
      <AssessmentPanel></AssessmentPanel>
      <TransferPanel></TransferPanel>
    </Grids>
  ) : (
    "Select a Property"
  );

  //const [inEditMode, setInEditMode] = useState(false);
  //   const [property, updateProperty] = useState({
  //     style: "residential",
  //     yearBuilt: "1940",
  //     grade: "C-1"
  //   });

  // <form onSubmit={formik.handleSubmit}>
  //   <label htmlFor="email">style</label>
  //   <input
  //     id="style"
  //     name="style"
  //     type="style"
  //     onChange={formik.handleChange}
  //     value={formik.values.style}
  //   />
  //   <button type="submit">Submit</button>
  // </form>
};
export default TaxSheet;
