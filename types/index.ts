interface Telemetry {
  robotId: string;
  x: number;
  y: number;
  z: number;
  theta: number;
  lastScannedAsset: number;
}

export type { Telemetry };
