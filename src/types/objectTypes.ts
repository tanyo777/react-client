export interface IPerformanceData {
  cpuCount: number;
  cpuModel: string;
  cpuUsage: string;
  os: string;
  uptime: string;
  ip: string;
  hostname: string;
  totalMem: string;
  freeMem: string;
  usedMem: string;
}

export interface IConnectionStatusEventPayload {
  isAlive: boolean;
  machineIp: string;
}
