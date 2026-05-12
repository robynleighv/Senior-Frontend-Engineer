type GridProps = {
  width: number;
  depth: number;
  cellSize?: number;
  color?: string;
};

export default function Grid({
  width,
  depth,
  cellSize = 1,
  color = "#3a4a7a",
}: GridProps) {
  const verticalCount = Math.floor(width / cellSize) + 1;
  const horizontalCount = Math.floor(depth / cellSize) + 1;

  const verticalLines = Array.from({ length: verticalCount }, (_, index) => {
    const x = index * cellSize;

    return (
      <line key={`vertical-${x}`}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array([x, 0, 0, x, 0, depth]), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={color} />
      </line>
    );
  });

  const horizontalLines = Array.from(
    { length: horizontalCount },
    (_, index) => {
      const z = index * cellSize;

      return (
        <line key={`horizontal-${z}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([0, 0, z, width, 0, z]), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color={color} />
        </line>
      );
    },
  );

  return <group>{[...verticalLines, ...horizontalLines]}</group>;
}
