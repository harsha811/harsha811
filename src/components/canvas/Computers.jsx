import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <primitive object={computer.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 10,
        near: 10,
        far: 200,
        position: [-2, -5, -5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
         <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;