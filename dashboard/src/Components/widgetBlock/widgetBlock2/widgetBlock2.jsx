import "./widgetBlock2.css";

export const WidgetBlock2 = ({ data }) => {
  return (
    <div className="widgetContainer2">
      <img src="\img\Group 2740 (1).svg" alt="img" className="widgetImg2" />
      <span className="widgetTitle2">{data[1]?.name}</span>
      <span className="widgetNum2">{data[1]?.value}</span>
      <span className="widgetStat2">{data[1]?.details}</span>
    </div>
  );
};
