import React, { useRef } from "react";
import styled from "styled-components";

const ImgHistory = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const HistoryImg = ({ src, alt }) => {
  const imgEl = useRef();

  const onMouseEnter = () => {
    if (imgEl.current) {
      imgEl.current.style.opacity = "1";
    }
  };
  const onMouseLeave = () => {
    if (imgEl.current) {
      imgEl.current.style.opacity = "0";
    }
  };

  return (
    <>
      <div style={{ position: "relative" }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <ImgHistory src={src} alt={alt} />
        <div
          ref={imgEl}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "99%",
            backgroundColor: "rgba(0,0,0,0.6)",
            transition: "all 0.3s ease",
            opacity: "0",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "18px",
              userSelect: "none",
            }}
          >
            2020 12 11
          </p>
          <p
            style={{
              color: "white",
              fontSize: "20px",
              userSelect: "none",
              marginTop: "8px",
            }}
          >
            디자인 회의
          </p>
        </div>
      </div>
    </>
  );
};

export default HistoryImg;
