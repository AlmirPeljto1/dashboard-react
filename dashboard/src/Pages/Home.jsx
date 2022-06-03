import "./Home.css";
import { useEffect, useState } from "react";
import { Chart } from "../Components/Chart/Chart";
import { Hidden1 } from "../Components/Hidden/Hidden1/Hidden1";
import { Hidden2 } from "../Components/Hidden/Hidden2/Hidden2";
import { Navbar } from "../Components/Navbar/Navbar";
import { PieCharts } from "../Components/PieChart/PieChart";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import { Status } from "../Components/Status/StatusBasic/Status";
import { StatusEc } from "../Components/Status/StatusEc/StatusEc";
import { Title } from "../Components/Title/Title";
import { WidgetBlock1 } from "../Components/widgetBlock/widgetBlock1/widgetBlock1";
import { WidgetBlock2 } from "../Components/widgetBlock/widgetBlock2/widgetBlock2";
import { WidgetBlock3 } from "../Components/widgetBlock/widgetBlock3/widgetBlock3";
import { WidgetBlock4 } from "../Components/widgetBlock/widgetBlock4/widgetBlock4";
import { WidgetBlock5 } from "../Components/widgetBlock/widgetBlock5/widgetBlock5";
import { WidgetBlock6 } from "../Components/widgetBlock/widgetBlock6/widgetBlock6";
import { Footer } from "../Components/Footer/Footer";
export default function Home() {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dev-api.economico.ba/api/v1/admin/fake-dashboard")
      .then((res) => res.json())
      .then((data) => setData(data.payload.fakeDashboardData));
  }, []);
  return (
    <div className="home">
      <Sidebar />
      <Navbar />
      <Title />
      {status ? (
        <StatusEc setStatus={setStatus} status={status} />
      ) : (
        <Status setStatus={setStatus} status={status} />
      )}
      <WidgetBlock1 data={data} />
      <WidgetBlock2 data={data} />
      <WidgetBlock3 data={data} />
      <WidgetBlock4 data={data} />
      <WidgetBlock5 data={data} />
      <WidgetBlock6 data={data} />
      <Hidden1 />
      <PieCharts />
      <Chart />
      <Hidden2 />
      <Footer />
    </div>
  );
}
