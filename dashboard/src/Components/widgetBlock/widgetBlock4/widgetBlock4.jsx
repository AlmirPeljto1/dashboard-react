import "./widgetBlock4.css";

export const WidgetBlock4 = ({ data }) => {
  return (
    <div className="widgetContainer4">
      <img src="\img\Group 2740 (3).svg" alt="img" className="widgetImg4" />
      <span className="widgetTitle4">{data[3]?.name}</span>
      <span className="widgetNum4">{data[3]?.value}</span>
      <span className="widgetStat4">{data[3]?.details}</span>
    </div>
  );
};
