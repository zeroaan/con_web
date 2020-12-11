import React from "react";
import styled from "styled-components";

import MemoryIcon from "@material-ui/icons/Memory";
import LanguageIcon from "@material-ui/icons/Language";
import { makeStyles } from "@material-ui/core/styles";

import FRODO from "assets/member/frodo.png";
import CON from "assets/member/con1.png";
import MUZI from "assets/member/muzi.png";
import RYAN from "assets/member/ryan.png";
import APEACH from "assets/member/apeach.png";

import Navbar from "components/Navbar";
import AboutTitle from "components/AboutTitle";
import MemberContent from "components/MemberContent";
import Footer from "components/Footer";

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

  const embededTeam = [
    {
      img: `${FRODO}`,
      name: "L. Ji Hyoung",
      desc: {
        part: "Ros",
        skill: "React, Node.JS",
        word: "Introduce your business team in the perfect manner",
      },
      git: "https://github.com/",
    },
    {
      img: `${CON}`,
      name: "B. Sang Jun",
      desc: {
        part: "Arduino",
        skill: "React, Node.JS",
        word: "Introduce your business team in the perfect manner",
      },
      git: "https://github.com/sangjunee",
    },
  ];
  const webTeam = [
    {
      img: `${MUZI}`,
      name: "A. Jin Young",
      desc: {
        part: "Front-End",
        skill: "React, Node.JS, css in JS",
        word: "Introduce your business team in the perfect manner",
      },
      git: "https://github.com/zeroaan",
    },
    {
      img: `${RYAN}`,
      name: "L. Hyun Jae",
      desc: {
        part: "Back-End",
        skill: "Node.JS, React",
        word: "Introduce your business team in the perfect manner",
      },
      git: "https://github.com/Gappleg",
    },
    {
      img: `${APEACH}`,
      name: "C. Yu Som",
      desc: {
        part: "Front-End",
        skill: "React, css in JS",
        word: "Introduce your business team in the perfect manner",
      },
      git: "https://github.com/yusom",
    },
  ];

  return (
    <>
      <Navbar />
      <AboutTitle
        title="MEMBER"
        backImg="https://estonianworld.com/wp-content/uploads/2017/01/Starship-in-London-XI.jpg"
      />
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
      <Footer />
    </>
  );
};

export default Members;
