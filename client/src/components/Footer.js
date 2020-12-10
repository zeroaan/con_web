import React from "react";
import styled from "styled-components";

const DivFoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito" sans-serif;
  height: 70px;
  border-top: 1px solid silver;
  width: 1300px;
  margin: 120px auto 0px auto;
`;
const PFoot = styled.p`
  font-size: 13px;
  margin: 3px 0;
  color: gray;
  letter-spacing: 1px;
  word-spacing: 2px;
`;

const Footer = () => {
  return (
    <>
      <DivFoot>
        <PFoot>Copyright &copy;{new Date().getFullYear()} Con, Inc.</PFoot>
      </DivFoot>
    </>
  );
};

export default Footer;
