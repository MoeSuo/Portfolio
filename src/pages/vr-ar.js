import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "react-three-fiber";
import CanvasWrapper from "./CanvasWrapper";

export default function Vr() {
  const gltfPath = "SLZ.glb"; // Replace this with the path to your GLB file

  return (
    <>
      <div className="container mx-auto h-[70%] px-5 py-2 lg:px-32 lg:pt-12">
        <CanvasWrapper>
          <Model />
        </CanvasWrapper>
      </div>
    </>
  );
}

function Model() {
  const gltfPath = "vartest_01.glb"; // Replace this with the path to your GLB file

  return (
    <mesh scale={[0.1, 0.1, 0.1]}>
      <primitive object={useLoader(GLTFLoader, gltfPath)} />
    </mesh>
  );
}
