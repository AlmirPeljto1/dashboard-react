import "./PieChart.css";
import { PieChart } from "react-minimal-pie-chart";
export const PieCharts = () => {
  const muskarci = 738;
  const zene = 560;
  const totalPeople = muskarci + zene;
  const commas = totalPeople.toLocaleString("de-DE");

  return (
    <div className="piechartContainer">
      <h3 className="piechartTitle">Spol korisnika</h3>
      <PieChart
        className="chart"
        data={[
          { title: "One", value: 66, color: "#206DC5" },
          { title: "Two", value: 33, color: "#20C54C" },
        ]}
        lineWidth={63}
        startAngle={-90}
        paddingAngle={2}
      />
      <span className="zene">33%</span>
      <span className="musk">66%</span>
      <span className="innerChart">{commas}</span>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <span className="zeneSpan">Žene</span>
      <span className="muskSpan">Muškarci</span>
      <span className="ostaloSpan">Ostalo</span>
      <span className="zeneNum">{zene}</span>
      <span className="muskNum">{muskarci}</span>
      <span className="ostaloNum">0</span>
    </div>
  );
};
