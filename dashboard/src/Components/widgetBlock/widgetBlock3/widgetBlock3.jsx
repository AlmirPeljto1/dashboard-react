import "./widgetBlock3.css";

export const WidgetBlock3 = ({ data }) => {
  return (
    <div className="widgetContainer3">
      <img src="\img\Group 2740 (2).svg" alt="img" className="widgetImg3" />
      <span className="widgetTitle3">{data[2]?.name}</span>
      <span className="widgetNum3">{data[2]?.value}</span>
      <span className="widgetStat3">{data[2]?.details}</span>
    </div>
  );
};
