import { useState } from "react";

import socket from "../../utils/socketConnection";
import Cpu from "../cpu/Cpu";
import Memory from "../memory/Memory";
import Info from "../info/Info";
import OfflineMessage from "../offline-message/OfflineMessage";
import { IPerformanceWidgetProps } from "../../types/componentPropsTypes";
import { IConnectionStatusEventPayload } from "../../types/objectTypes";

import styles from "./performanceWidget.module.scss";

const PerformanceWidget = (props: IPerformanceWidgetProps): JSX.Element => {
  const [isAlive, setIsAlive] = useState(true);

  socket.on("connectionStatus", (data: IConnectionStatusEventPayload) => {
    if (data.machineIp && data.machineIp === props.data.ip) {
      setIsAlive(data.isAlive);
    }
  });

  return (
    <div className={styles.performanceWidgetContainer}>
      <Cpu cpuLoad={props.data.cpuUsage} />
      <Memory memoryUsage={props.data.usedMem} />
      <Info infoData={{ ...props.data }} />
      {isAlive ? <></> : <OfflineMessage />}
    </div>
  );
};

export default PerformanceWidget;
