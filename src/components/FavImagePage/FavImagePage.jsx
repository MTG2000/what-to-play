import styled from "styled-components";
import { withTransition } from "../../utils/withTransition";
import { useState, useEffect } from "react";
import { Button } from "../SharedComponents";
import RecommendationSys from "../../api/gamesRecommender";

const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  padding-top: 10vh;
  padding-bottom: 120px;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: var(--fontNormal);
  }

  p {
    font-size: var(--fontSmall);
    margin-bottom: 60px;
  }

  li {
    font-size: var(--fontSmall);
    text-align: left;
    margin-bottom: 15px;
  }

  button {
    margin-top: 60px;
  }

  .container {
    width: 80vw;
    max-width: 900px;
    position: relative;
    padding-top: 56.25%;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      img {
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
      }
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;
    }

    img:nth-of-type(1) {
      clip-path: polygon(0 0, 60% 0, 10% 100%, 0% 100%);
    }

    img:nth-of-type(2) {
      clip-path: polygon(60% 0, 100% 0, 30% 100%, 10% 100%);
    }

    img:nth-of-type(3) {
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 30% 100%);
    }

    img:hover,
    img.selected {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  .container.selected {
    box-shadow: 0 0 12px 3px cyan;
  }

  .container:hover img,
  .container.selected img {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  }

  .container.selected img.selected {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .container img:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) !important;
  }
`;

const types = [
  { values: ["adventure", "fantasy", "world"], img: "/images/light-image.jpg" },
  { values: ["fast-paced", "music", "world"], img: "/images/scifi-image.jpg" },
  { values: ["dark", "horror", "atmosphere"], img: "/images/dark-image.jpg" },
];

function FavImagePage() {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  useEffect(() => {
    if (selectedIdx !== -1)
      RecommendationSys.favImg = types[selectedIdx].values;
  }, [selectedIdx]);

  useEffect(() => {
    document.dispatchEvent(new CustomEvent("change-progress", { detail: 80 }));
  }, []);

  return (
    <Root>
      <h1>Choose the Image that you think is more beautiful</h1>
      <div>
        <div className={`${selectedIdx !== -1 ? "selected" : ""} container`}>
          {types.map((t, idx) => (
            <img
              className={`${idx === selectedIdx ? "selected" : ""}`}
              onClick={() => {
                if (selectedIdx === idx) setSelectedIdx(-1);
                else setSelectedIdx(idx);
              }}
              key={idx}
              src={t.img}
              alt={t.values[0]}
            />
          ))}
        </div>
      </div>
      {selectedIdx !== -1 && (
        <Button
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.2, boxShadow: "0 0 15px white" }}
          href="/loading-page"
        >
          Next
        </Button>
      )}
    </Root>
  );
}

export default withTransition(FavImagePage);
