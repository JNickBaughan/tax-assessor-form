import React from "react";
import styled from "styled-components";
import StateContext from "../../context";

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const LeftDiv = styled.div`
  display: inline-block;
  margin: 4px;
`;

const RightDiv = styled.div`
  vertical-align: top;
  display: inline-block;
  margin: 4px;
`;

const BaseDetails = ({ formik }) => {
  return (
    <StateContext.Consumer>
      {() => {
        return (
          <div>
            <LeftDiv>
              <label>Owner</label>
              <Input
                id="ownerName"
                name="ownerName"
                onChange={formik.handleChange}
                value={formik.values.ownerName}
              />
            </LeftDiv>
            <RightDiv>
              <label>another title</label>
              <Input
                id="taxId"
                name="taxId"
                onChange={formik.handleChange}
                value={formik.values.taxId}
              />
            </RightDiv>
          </div>
        );
      }}
    </StateContext.Consumer>
  );
};

export default BaseDetails;
