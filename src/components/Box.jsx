import { useState } from 'react';

function Box({ 
  size = { width: 1, height: 1, depth: 1 }, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = [1, 1, 1],
  color = 0x0f3460,
  visible = true,
  locked = false
}) {
  const [hovered, setHovered] = useState(false);

  if (!visible) return null;

  return (
    <mesh
      position={position}
      rotation={rotation}
      scale={scale}
      visible={visible}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[size.width, size.height, size.depth]} />
      <meshStandardMaterial
        color={hovered ? 0x3b82f6 : color}
        roughness={0.5}
        metalness={0.1}
      />
    </mesh>
  );
}

export default Box;
