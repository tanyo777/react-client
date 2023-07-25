const Memory = (props: { memoryUsage: string }) => {
  const cpuLoadInteger = +props.memoryUsage.slice(
    0,
    props.memoryUsage.length - 1
  );

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
      <h3>Memory Usage</h3>
      <div className="usageComponent" style={{ backgroundColor: bgColor }}>
        {props.memoryUsage}
      </div>
    </div>
  );
};

export default Memory;
