import { MutableRefObject } from "react";
import Robot from "./Robot";
import { Quaternion, Vector3 } from "three";
import Grid from "./Grid";

type SceneProps = {
  targetPosition: MutableRefObject<Vector3>;
  targetQuaternion: MutableRefObject<Quaternion>;
};

export default function Scene(props: SceneProps) {
  const { targetPosition, targetQuaternion } = props;

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <Robot
        targetPosition={targetPosition}
        targetQuaternion={targetQuaternion}
      />
      {/* <gridHelper args={[9, 9]} position={[4, 0, 4]} /> */}
      <Grid width={9} depth={9} cellSize={1} />
    </>
  );
}
