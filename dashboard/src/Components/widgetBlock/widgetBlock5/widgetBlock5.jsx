import "./widgetBlock5.css";

export const WidgetBlock5 = ({ data }) => {
  return (
    <div className="widgetContainer5">
      <img src="\img\Group 2740 (4).svg" alt="img" className="widgetImg5" />
      <span className="widgetTitle5">{data[4]?.name}</span>
      <span className="widgetNum5">{data[4]?.value}</span>
      <span className="widgetStat5">{data[4]?.details}</span>
    </div>
  );
};
