import Canvas3D from './components/Canvas3D'
import SidebarPanel from './components/SidebarPanel'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import JerseyModel from './components/JerseyModel'
import { OrbitControls } from '@react-three/drei';

export default function App() {
  const [selectedColor, setSelectedColor] = useState('#5C78CC')

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left: Canvas 3D */}
      <div style={{ width: '50vw', background: '#f0f0f0' }}>
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <JerseyModel selectedColor={selectedColor} />
          <OrbitControls />
        </Canvas>
      </div>

      {/* Right: Sidebar */}
      <div style={{ width: '50vw', padding: '20px', overflowY: 'auto' }}>
        <SidebarPanel
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  )
}
