import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => controlsRef.current.update());

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};

const CanvasWrapper = ({ children }) => {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <CameraControls />
      {children}
    </Canvas>
  );
};

export default CanvasWrapper;
