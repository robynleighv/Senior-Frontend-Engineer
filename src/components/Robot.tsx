import { useRef, MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { Quaternion, Vector3 } from "three";

type RobotProps = {
  targetPosition: MutableRefObject<Vector3>;
  targetQuaternion: MutableRefObject<Quaternion>;
};

export default function Robot(props: RobotProps) {
  const meshRef = useRef<any>(null);
  const { targetPosition, targetQuaternion } = props;

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const alpha = 1 - Math.exp(-6 * delta);

    mesh.position.lerp(targetPosition.current, alpha);
    mesh.quaternion.rotateTowards(targetQuaternion.current, 2.5 * delta);
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#cbfe34" />
    </mesh>
  );
}
