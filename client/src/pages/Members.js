import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import MemoryIcon from "@material-ui/icons/Memory";
import LanguageIcon from "@material-ui/icons/Language";
import styled from "styled-components";

import CON from "assets/con1.png";
import RYAN from "assets/ryan.png";
import MUZI from "assets/muzi.png";
import FRODO from "assets/frodo.png";
import APEACH from "assets/apeach.png";

import Navbar from "components/Navbar";
import AboutTitle from "components/AboutTitle";
import Footer from "components/Footer";

const DivCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const DivTeam = styled.div`
  display: flex;
  text-align: center;
  margin: 50px 0;
`;
const DivMember = styled.div`
  margin: 0px 70px;
`;
const ImgStyled = styled.img`
  width: 180px;
  height: 180px;
`;

const Members = () => {
  return (
    <>
      <Navbar borderColor="none" />
      <AboutTitle
        title="Member"
        subTitle="We're looking for great people to join our growing team."
      />
      <DivCon>
        <div style={{ display: "flex", position: "relative", left: "-25px" }}>
          <MemoryIcon
            style={{
              color: "rgba(0,0,0,0.8)",
              margin: "80px 15px 0 0",
              fontSize: "43px",
            }}
          />
          <h1
            style={{
              marginTop: "80px",
              color: "rgba(0,0,0,0.8)",
              borderBottom: "3px solid rgba(0,0,0,0.3)",
              fontFamily: `"Nunito", sans-serif`,
            }}
          >
            Embedded
          </h1>
        </div>
        <DivTeam>
          <DivMember>
            <ImgStyled src={FRODO} alt="FRODO" />
            <p
              style={{
                width: "250px",
                margin: "20px 0",
                fontSize: "23px",
              }}
            >
              이지형
            </p>
            <div
              style={{
                width: "250px",
                borderTop: "3px solid rgba(0,0,0,0.1)",
                borderBottom: "3px solid rgba(0,0,0,0.1)",
                margin: "20px 0",
                padding: "20px 0",
              }}
            >
              <p>
                Introduce your business team in the perfect manner with our make a team introduction
                presentation about us PowerPoint slide. The presentation design shares the concept.
              </p>
              <GitHubIcon style={{ margin: "20px 0 0 0", fontSize: "35px" }} />
            </div>
          </DivMember>
          <DivMember>
            <ImgStyled src={CON} alt="CON" />
            <p
              style={{
                width: "250px",
                margin: "20px 0",
                fontSize: "23px",
              }}
            >
              변상준
            </p>
            <div
              style={{
                width: "250px",
                borderTop: "3px solid rgba(0,0,0,0.1)",
                borderBottom: "3px solid rgba(0,0,0,0.1)",
                margin: "20px 0",
                padding: "20px 0",
              }}
            >
              <p>
                Introduce your business team in the perfect manner with our make a team introduction
                presentation about us PowerPoint slide. The presentation design shares the concept.
              </p>
              <GitHubIcon style={{ margin: "20px 0 0 0", fontSize: "35px" }} />
            </div>
          </DivMember>
        </DivTeam>
        <div style={{ display: "flex", position: "relative", left: "-25px" }}>
          <LanguageIcon
            style={{
              color: "rgba(0,0,0,0.8)",
              margin: "80px 15px 0 0",
              fontSize: "43px",
            }}
          />
          <h1
            style={{
              marginTop: "80px",
              color: "rgba(0,0,0,0.8)",
              borderBottom: "3px solid rgba(0,0,0,0.3)",
              fontFamily: `"Nunito", sans-serif`,
            }}
          >
            Web
          </h1>
        </div>
        <DivTeam>
          <DivMember>
            <ImgStyled src={MUZI} alt="MUZI" />
            <p
              style={{
                width: "250px",
                margin: "20px 0",
                fontSize: "23px",
              }}
            >
              안진영
            </p>
            <div
              style={{
                width: "250px",
                borderTop: "3px solid rgba(0,0,0,0.1)",
                borderBottom: "3px solid rgba(0,0,0,0.1)",
                margin: "20px 0",
                padding: "20px 0",
              }}
            >
              <p>
                Introduce your business team in the perfect manner with our make a team introduction
                presentation about us PowerPoint slide. The presentation design shares the concept.
              </p>
              <GitHubIcon style={{ margin: "20px 0 0 0", fontSize: "35px" }} />
            </div>
          </DivMember>
          <DivMember>
            <ImgStyled src={RYAN} alt="RYAN" />
            <p
              style={{
                width: "250px",
                margin: "20px 0",
                fontSize: "23px",
              }}
            >
              이현재
            </p>
            <div
              style={{
                width: "250px",
                borderTop: "3px solid rgba(0,0,0,0.1)",
                borderBottom: "3px solid rgba(0,0,0,0.1)",
                margin: "20px 0",
                padding: "20px 0",
              }}
            >
              <p>
                Introduce your business team in the perfect manner with our make a team introduction
                presentation about us PowerPoint slide. The presentation design shares the concept.
              </p>
              <GitHubIcon style={{ margin: "20px 0 0 0", fontSize: "35px" }} />
            </div>
          </DivMember>
          <DivMember>
            <ImgStyled src={APEACH} alt="APEACH" />
            <p
              style={{
                width: "250px",
                margin: "20px 0",
                fontSize: "23px",
              }}
            >
              최유솜
            </p>
            <div
              style={{
                width: "250px",
                borderTop: "3px solid rgba(0,0,0,0.1)",
                borderBottom: "3px solid rgba(0,0,0,0.1)",
                margin: "20px 0",
                padding: "20px 0",
              }}
            >
              <p>
                Introduce your business team in the perfect manner with our make a team introduction
                presentation about us PowerPoint slide. The presentation design shares the concept.
              </p>
              <GitHubIcon style={{ margin: "20px 0 0 0", fontSize: "35px" }} />
            </div>
          </DivMember>
        </DivTeam>
      </DivCon>
      <Footer />
    </>
  );
};

export default Members;
