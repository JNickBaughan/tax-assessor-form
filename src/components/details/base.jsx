import React from "react";
import styled from "styled-components";

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

const BaseDetails = () => {
  return (
    <div>
      <LeftDiv>
        <label>title</label>
        <Input id="title" name="style" onChange={() => {}} value={"test"} />
      </LeftDiv>
      <RightDiv>
        <label>another title</label>
        <Input id="title" name="style" onChange={() => {}} value={"test"} />
      </RightDiv>
    </div>
  );
};

export default BaseDetails;
