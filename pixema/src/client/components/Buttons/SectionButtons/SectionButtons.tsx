import React from "react";
import { Pin, MainBox, } from "./styles";
import FavouriteIcon from "src/client/components/images/FavouriteIcon";
import ForwardIcon from "src/client/components/images/ForwardIcon";

const SectionButtons = () => {
  return (
    <MainBox>
      <Pin>
        <FavouriteIcon></FavouriteIcon>
      </Pin>
      <Pin>
        <ForwardIcon></ForwardIcon>
      </Pin>
    </MainBox>
  );
};

export default SectionButtons;
