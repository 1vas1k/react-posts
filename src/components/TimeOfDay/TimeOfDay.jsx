import React, {
  useState,
  // useEffect
} from "react";
import classes from "./TimeOfDay.module.css";
import {
  WiMoonAltWaxingGibbous6,
  WiMoonAltWaxingGibbous5,
  WiMoonAltWaxingGibbous4,
  WiMoonAltWaxingGibbous3,
  WiMoonAltWaxingGibbous2,
  WiMoonAltWaxingGibbous1,
  WiMoonAltWaxingCrescent6,
  WiMoonAltWaxingCrescent5,
  WiMoonAltWaxingCrescent4,
  WiMoonAltWaxingCrescent3,
  WiMoonAltWaxingCrescent2,
  WiMoonAltWaxingCrescent1,
  WiMoonAltWaningCrescent6,
  WiMoonAltWaningCrescent5,
  WiMoonAltWaningCrescent4,
  WiMoonAltWaningCrescent3,
  WiMoonAltWaningCrescent2,
  WiMoonAltWaningCrescent1,
  WiMoonAltWaningGibbous6,
  WiMoonAltWaningGibbous5,
  WiMoonAltWaningGibbous4,
  WiMoonAltWaningGibbous3,
  WiMoonAltWaningGibbous2,
  WiMoonAltWaningGibbous1,
} from "react-icons/wi";

export const TimeOfDay = ({ time, props }) => {
  const timeOfDay = {
    0: <WiMoonAltWaxingGibbous6 size={50} />,
    1: <WiMoonAltWaxingGibbous5 size={50} />,
    2: <WiMoonAltWaxingGibbous4 size={50} />,
    3: <WiMoonAltWaxingGibbous3 size={50} />,
    4: <WiMoonAltWaxingGibbous2 size={50} />,
    5: <WiMoonAltWaxingGibbous1 size={50} />,

    6: <WiMoonAltWaxingCrescent6 size={50} />,
    7: <WiMoonAltWaxingCrescent5 size={50} />,
    8: <WiMoonAltWaxingCrescent4 size={50} />,
    9: <WiMoonAltWaxingCrescent3 size={50} />,
    10: <WiMoonAltWaxingCrescent2 size={50} />,
    11: <WiMoonAltWaxingCrescent1 size={50} />,

    12: <WiMoonAltWaningCrescent6 size={50} />,
    13: <WiMoonAltWaningCrescent5 size={50} />,
    14: <WiMoonAltWaningCrescent4 size={50} />,
    15: <WiMoonAltWaningCrescent3 size={50} />,
    16: <WiMoonAltWaningCrescent2 size={50} />,
    17: <WiMoonAltWaningCrescent1 size={50} />,

    18: <WiMoonAltWaningGibbous6 size={50} />,
    19: <WiMoonAltWaningGibbous5 size={50} />,
    20: <WiMoonAltWaningGibbous4 size={50} />,
    21: <WiMoonAltWaningGibbous3 size={50} />,
    22: <WiMoonAltWaningGibbous2 size={50} />,
    23: <WiMoonAltWaningGibbous1 size={50} />,
  };

  const [currentIndex, setCurrentIndex] = useState(time);
  const [currentIcon, setCurrentIcon] = useState(timeOfDay[currentIndex]);

  const changeMoon = () => {
    const iconNumber = Object.keys(timeOfDay).length;
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => {
        // console.log(prev);
        if (prev !== iconNumber - 1) {
          setCurrentIcon(timeOfDay[prev + 1]);
          return prev + 1;
        } else {
          setCurrentIcon(timeOfDay[0]);
          return 0;
        }
      });
    }, 100);

    setTimeout(() => {
      clearInterval(intervalId);
      console.log("Интервал остановлен");
    }, 2400);
  };

  // useEffect(() => {
  //   setCurrentIcon(timeOfDay[currentIndex]);
  // }, [currentIndex]);

  return (
    <button {...props} className={classes.myContainer} onClick={changeMoon}>
      {currentIcon}
    </button>
  );
};
