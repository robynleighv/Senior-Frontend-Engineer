import { useState, useEffect, useRef } from "react";
import { MathUtils, Quaternion, Vector3 } from "three";
import { Canvas } from "@react-three/fiber";
import SidePanel from "./components/SidePanel";
import Scene from "./components/Scene";

export type Directions = "original" | "reversed";

export default function App() {
  const targetPosition = useRef(new Vector3(0, 0.5, 0));
  const targetQuaternion = useRef(new Quaternion());
  const upAxis = useRef(new Vector3(0, 1, 0));
  const [lastAsset, setLastAsset] = useState<string>("");
  const [lastFiveAssets, setLastFiveAssets] = useState<Array<string>>([""]);

  useEffect(() => {
    const webSocket = new WebSocket("ws://localhost:8080");

    webSocket.addEventListener("open", () =>
      webSocket.send("Connection established!"),
    );
    webSocket.addEventListener("message", (e) => {
      const data = JSON.parse(e.data);

      targetPosition.current.set(Number(data.x), 0.5, Number(data.y));

      const thetaRadians = MathUtils.degToRad(Number(data.theta));
      targetQuaternion.current.setFromAxisAngle(upAxis.current, thetaRadians);
      setLastAsset(data.lastScannedAsset);
    });

    return () => webSocket.close();
  }, []);

  useEffect(() => {
    if (lastFiveAssets[lastFiveAssets.length - 1] !== lastAsset) {
      setLastFiveAssets([
        ...lastFiveAssets.slice(lastFiveAssets.length < 5 ? undefined : 1),
        lastAsset,
      ]);
    }
  }, [lastAsset]);

  return (
    <div className="flex w-full h-screen">
      <Canvas camera={{ position: [15, 5, 13] }} data-testid="canvas">
        <Scene
          targetPosition={targetPosition}
          targetQuaternion={targetQuaternion}
        />
      </Canvas>
      <SidePanel lastFiveAssets={lastFiveAssets} />
    </div>
  );
}
