import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { MeshStandardMaterial } from 'three'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]}/>
      <mesh position={[1, 0, 2]}>

        {/* Default is 1x1x1 box */}
        <boxGeometry args={[1, 1, 1]}/>

        {/* Mesh basic material needed light to be viewed */}
        <meshStandardMaterial color="orange" />
        {/* <meshBasicMaterial/> */}
      </mesh>

      <mesh position={[-1, 0, -2]}>

        {/* Default is 1x1x1 box */}
        <boxGeometry args={[1, 1, 1]}/>

        {/* Mesh basic material needed light to be viewed */}
        <meshStandardMaterial color="orange" />
        {/* <meshBasicMaterial/> */}
      </mesh>
      
    </Canvas>
  )
};

export default App
