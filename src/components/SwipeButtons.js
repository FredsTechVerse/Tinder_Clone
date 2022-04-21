import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import StarRateIcon from "@material-ui/icons/StarRate";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import FlashOnIcon from "@material-ui/icons/FlashOn";

function SwipeButtons() {
  return (
    <div className="grandpa">
      <div className="swipeButtons">
        <IconButton className="swipeButtons__repeat">
          <ReplayIcon />
        </IconButton>
        <IconButton className="swipeButtons__left">
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton className="swipeButtons__star">
          <StarRateIcon />
        </IconButton>
        <IconButton className="swipeButtons__right">
          <KeyboardArrowRightIcon />
        </IconButton>
        <IconButton className="swipeButtons__lightning">
          <FlashOnIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default SwipeButtons;
