import React from "react";
import styled from "styled-components";

import MemoryIcon from "@material-ui/icons/Memory";
import LanguageIcon from "@material-ui/icons/Language";
import { makeStyles } from "@material-ui/core/styles";

import BACKIMG from "assets/header/member.png";

import Layout from "components/Layout/Layout";
import MemberContent from "components/Member/MemberContent";

import { embededTeam, webTeam } from "data/Member/MemberData";

const DivCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
`;
const DivTeamTitle = styled.div`
  display: flex;
  margin: 0 38px 0 0;
`;
const H1TeamTitle = styled.h1`
  font-family: "Nunito", sans-serif;
  color: rgba(0, 0, 0, 0.8);
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  margin: 0 15px;
`;
const DivTeam = styled.div`
  display: flex;
  text-align: center;
  margin: 50px 0 0 0;
`;

const useStyles = makeStyles({
  teamIcon: {
    color: "rgba(0, 0, 0, 0.8)",
    fontSize: "43px",
  },
});

const Members = () => {
  const classes = useStyles();

  return (
    <Layout title="MEMBER" backImg={BACKIMG}>
      <DivCon>
        <DivTeamTitle>
          <MemoryIcon className={classes.teamIcon} />
          <H1TeamTitle>Embedded</H1TeamTitle>
        </DivTeamTitle>
        <DivTeam>
          {embededTeam.map((v) => (
            <MemberContent key={v.name} img={v.img} name={v.name} desc={v.desc} git={v.git} />
          ))}
        </DivTeam>
      </DivCon>
      <DivCon>
        <DivTeamTitle>
          <LanguageIcon className={classes.teamIcon} />
          <H1TeamTitle>Web</H1TeamTitle>
        </DivTeamTitle>
        <DivTeam>
          {webTeam.map((v) => (
            <MemberContent key={v.name} img={v.img} name={v.name} desc={v.desc} git={v.git} />
          ))}
        </DivTeam>
      </DivCon>
    </Layout>
  );
};

export default Members;
