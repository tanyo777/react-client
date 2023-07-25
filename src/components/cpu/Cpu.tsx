const Cpu = (props: { cpuLoad: string }) => {
  const cpuLoadInteger = +props.cpuLoad.slice(0, props.cpuLoad.length - 1);

  let bgColor;

  if (cpuLoadInteger > 80) {
    bgColor = "tomato";
  }
  if (cpuLoadInteger > 60 && cpuLoadInteger <= 80) {
    bgColor = "#E7B10A";
  }
  if (cpuLoadInteger > 0 && cpuLoadInteger <= 60) {
    bgColor = "#54B435";
  }

  return (
    <div className="sectionContainer">
      <h3>CPU Load</h3>
      <div className="usageComponent" style={{ backgroundColor: bgColor }}>
        {props.cpuLoad}
      </div>
    </div>
  );
};

export default Cpu;
