import { IPerformanceData } from "../../types/objectTypes";

const Info = (props: { infoData: IPerformanceData }) => {
  return (
    <div className="sectionInfo">
      <h3>Operating System</h3>
      <p>
        {props.infoData.os}, IPv4: {props.infoData.ip}
      </p>
      <p>Hostname: {props.infoData.hostname}</p>
      <h3>Time Online</h3>
      <p>{props.infoData.uptime}</p>
      <h3>Processor Information</h3>
      <p>Type: {props.infoData.cpuModel}</p>
      <p>Number of Cores: {props.infoData.cpuCount}</p>
    </div>
  );
};

export default Info;
