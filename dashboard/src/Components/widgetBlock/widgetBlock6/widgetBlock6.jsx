import "./widgetBlock6.css";

export const WidgetBlock6 = ({ data }) => {
  return (
    <div className="widgetContainer6">
      <img src="\img\Group 2740 (5).svg" alt="img" className="widgetImg6" />
      <span className="widgetTitle6">{data[5]?.name}</span>
      <span className="widgetNum6">{data[5]?.value}</span>
      <span className="widgetStat6">{data[5]?.details}</span>
    </div>
  );
};
