import { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import TrackVisibility from "react-on-screen";
import styles from "./Continuum.module.css";

let timer = null as any;

const Continuum = ({
  title,
  leftText,
  rightText,
  leftPercentage,
  isVisible,
}: any) => {
  const [actualPercentage, setActualPercentage] = useState(0);
  useEffect(() => {
    clearTimeout(timer);
    if (!isVisible) {
      setActualPercentage(0);
    }
    timer = setTimeout(() => {
      if (isVisible) {
        setActualPercentage(leftPercentage);
      }
    }, 250);
  }, [isVisible]);
  return (
    <div className={styles.continuum}>
      <div className={styles.continuumTitle}>{title}</div>

      <ReactSpeedometer
        value={actualPercentage}
        minValue={0}
        maxValue={100}
        height={150}
        customSegmentLabels={[
          {
            text: leftText,
            // @ts-ignore
            position: "OUTSIDE",
            color: "#000",
          },
          {
            text: "",
          },
          {
            text: "",
          },
          {
            text: "",
          },
          {
            text: rightText,
            // @ts-ignore
            position: "OUTSIDE",
            color: "#000",
          },
        ]}
        startColor={"#00A8DE"}
        endColor={"#00A8DE"}
        // segmentColors={}
        ringWidth={60}
        needleColor={"#000"}
        textColor={"#000"}
        currentValueText={"${value}%"}
        labelFontSize={"14px"}
        valueTextFontSize={"16px"}
        valueTextFontWeight={"bold"}
        paddingHorizontal={0}
        paddingVertical={0}
      />
    </div>
  );
};

export default Continuum;
