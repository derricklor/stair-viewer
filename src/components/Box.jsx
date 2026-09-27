import { useState } from 'react';

function Box({ size = { width: 1, height: 1, depth: 1 } }) {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[size.width, size.height, size.depth]} />
      <meshStandardMaterial
        color={hovered ? 0x3b82f6 : 0x0f3460}
        roughness={0.5}
        metalness={0.1}
      />
    </mesh>
  );
}

export default Box;
