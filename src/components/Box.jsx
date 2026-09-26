import { useState } from 'react';

function Box() {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={hovered ? 0x3b82f6 : 0x0f3460}
        roughness={0.5}
        metalness={0.1}
      />
    </mesh>
  );
}

export default Box;
