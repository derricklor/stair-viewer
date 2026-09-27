import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense, useEffect, useMemo } from 'react';
import Box from './Box.jsx';

function Scene() {
  useEffect(() => {
    // Set up Three.js scene with soft downward lighting
    // This is handled by React Three Fiber's Canvas component
  }, []);

  // Memoize objects to prevent unnecessary re-renders
  const objects = useMemo(() => [
    {
      id: 1,
      name: 'Box',
      type: 'Mesh',
      meshSize: { width: 1, height: 1, depth: 1 },
      transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      material: { color: 0x0f3460 },
      visible: true,
      locked: false,
    },
  ], []);

  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          
          <directionalLight
            position={[5, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          
          <pointLight position={[0, 5, 0]} intensity={0.5} />
          
          <Environment preset="city" />
          
          {objects.map(obj => (
            <Box
              key={obj.id}
              size={obj.meshSize}
              position={obj.transform.position}
              rotation={obj.transform.rotation}
              scale={obj.transform.scale}
              color={obj.material.color}
              visible={obj.visible}
              locked={obj.locked}
            />
          ))}
          
          <OrbitControls
            enableDamping
            dampingFactor={0.05}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
