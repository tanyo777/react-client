import React, { useEffect, useState } from "react";

import socket from "./utils/socketConnection";
import PerformanceWidget from "./components/performance-widget/PerformanceWidget";
import { IPerformanceData } from "./types/objectTypes";

function App() {
  const [machines, setMachines] = useState({});

  useEffect(() => {
    socket.on("machineMetrics", (data: IPerformanceData) => {
      setMachines((prevState) => ({ ...prevState, [data.ip]: data }));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const widgets = (Object.values(machines) as IPerformanceData[]).map(
    (data: IPerformanceData) => <PerformanceWidget data={data} key={data.ip} />
  );

  return (
    <div className="appContainer">
      <h1>
        Monitoring Tool - {widgets.length}{" "}
        {widgets.length > 1 ? "machines" : "machine"}
      </h1>
      {widgets}
    </div>
  );
}

export default App;
