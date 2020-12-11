import React from "react";
import styled from "styled-components";

import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

const DivMember = styled.div`
  margin: 0px 70px;
`;
const ImgStyled = styled.img`
  width: 180px;
  height: 180px;
`;
const PName = styled.p`
  width: 250px;
  margin: 20px 0;
  font-size: 23px;
  font-family: "Nunito", sans-serif;
`;
const PDesc = styled.p`
  font-family: "Nunito", sans-serif;
`;
const DivDesc = styled.div`
  width: 250px;
  border-top: 3px solid rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 20px 0;
`;
const AGit = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
`;

const useStyles = makeStyles({
  gitIcon: {
    margin: "20px 0 0 0",
    fontSize: "40px",
    color: "rgba(0, 0, 0, 0.8)",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "black",
      transform: "scale(1.1)",
    },
  },
});

const MemberContent = ({ img, name, desc, git }) => {
  const classes = useStyles();

  return (
    <>
      <DivMember>
        <ImgStyled src={img} alt="FRODO" />
        <PName>{name}</PName>
        <DivDesc>
          <PDesc>
            <p>{desc.a}</p>
            <p>{desc.b}</p>
            <p style={{ marginTop: "20px" }}>"{desc.c}"</p>
          </PDesc>
          <AGit href={git} target="_blank">
            <GitHubIcon className={classes.gitIcon} />
          </AGit>
        </DivDesc>
      </DivMember>
    </>
  );
};

export default MemberContent;
