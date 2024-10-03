//SpinningModel.jsx
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';

function NaviModel() {
  const { scene } = useGLTF('public/models/navi.glb');
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(3 / 2, 0, 3);
      modelRef.current.position.set(-1, -6, -10);
    }
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.z += 0.01;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[100, 100, 100]} />;
}

export default function App() {
  return (
    <Canvas camera={{ position: [4, 3, 25], fov: 30 }}>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense
        fallback={
          <Html center>
            <div style={{ color: 'white', background: 'rgba(0, 0, 0, 0.7)', padding: '10px', borderRadius: '8px' }}>
              Loading 3D Model...
            </div>
          </Html>
        }
      >
        <NaviModel />
      </Suspense>
    </Canvas>
  );
}