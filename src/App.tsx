import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

const App = () => {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} />
      <Suspense fallback={null}>
        <Model position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default App;
