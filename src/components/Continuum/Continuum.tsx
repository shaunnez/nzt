import { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import styles from "./Continuum.module.css";

let timer = null as any;

const Continuum = ({
  title,
  leftText,
  rightText,
  leftPercentage,
  isVisible,
}: any) => {
  const isPdf = window.location.href.indexOf("pdfme=true") > -1;
  const [actualPercentage, setActualPercentage] = useState(
    isPdf ? leftPercentage : 0
  );
  useEffect(() => {
    if (isPdf) {
      return;
    }
    clearTimeout(timer);
    if (!isVisible) {
      setActualPercentage(0);
    }
    timer = setTimeout(() => {
      if (isVisible) {
        setActualPercentage(leftPercentage);
      }
    }, 250);
    // eslint-disable-next-line
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
