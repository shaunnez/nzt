import ReactSpeedometer from "react-d3-speedometer";
import { ReactComponent as ProgressGraphic } from "assets/progress.svg";
import styles from "./Continuum.module.css";

const Continuum = ({ title, leftText, rightText, leftPercentage }: any) => {
  return (
    <div className={styles.continuum}>
      <div className={styles.continuumTitle}>{title}</div>

      <ReactSpeedometer
        value={leftPercentage}
        minValue={0}
        maxValue={100}
        height={150}
        customSegmentLabels={[
          {
            text: leftText,
            // @ts-ignore
            position: "OUTSIDE",
            color: "#555",
          },
          {
            text: "",
            // @ts-ignore
            position: "OUTSIDE",
            color: "#555",
          },
          {
            text: "",
            // @ts-ignore
            position: "OUTSIDE",
            color: "#555",
          },
          {
            text: "",
            // @ts-ignore
            position: "OUTSIDE",
            color: "#555",
          },
          {
            text: rightText,
            // @ts-ignore
            position: "OUTSIDE",
            color: "#555",
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
