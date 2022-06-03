import "./widgetBlock1.css";

export const WidgetBlock1 = ({ data }) => {
  return (
    <div className="widgetContainer1">
      <img src="\img\Group 2740.svg" alt="img" className="widgetImg1" />
      <span className="widgetTitle1">{data[0]?.name}</span>
      <span className="widgetNum1">{data[0]?.value}</span>
      <span className="widgetStat1">{data[0]?.details}</span>
    </div>
  );
};
