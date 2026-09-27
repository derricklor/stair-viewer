import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense, useEffect } from 'react';
import Box from './Box.jsx';

function Scene({ boxSize = { width: 1, height: 1, depth: 1 } }) {
  useEffect(() => {
    // Set up Three.js scene with soft downward lighting
    // This is handled by React Three Fiber's Canvas component
  }, []);

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
          
          <Box size={boxSize} />
          
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
