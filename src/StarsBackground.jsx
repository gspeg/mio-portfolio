import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function WavePlane() {
  const meshRef = useRef()

  const planeWidth = 20
  const planeHeight = 10
  const segments = 100

  const geometry = useMemo(() => {
    const geom = new THREE.PlaneGeometry(planeWidth, planeHeight, segments, segments)
    geom.rotateX(-Math.PI / 2)
    return geom
  }, [])

  const positionsRef = useRef(geometry.attributes.position.array.slice())
  const materialRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const positions = geometry.attributes.position.array

    for (let i = 0; i < positions.length; i += 3) {
      const x = positionsRef.current[i]
      const z = positionsRef.current[i + 2]
      positions[i + 1] = Math.sin(x * 1.5 + t) * 0.3 + Math.cos(z * 1.5 + t) * 0.3
    }

    geometry.attributes.position.needsUpdate = true

    // Aggiorna colore su scala di grigi (0 → 1 → 0)
    const grayValue = (Math.sin(t * 0.2) * 0.5 + 0.5) // da 0 a 1
    const grayColor = new THREE.Color(grayValue, grayValue, grayValue)
    if (materialRef.current) {
      materialRef.current.color = grayColor
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial ref={materialRef} wireframe />
    </mesh>
  )
}

export default function StarsBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 5, 10], fov: 40 }}>
        <color attach="background" args={['black']} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <WavePlane />
      </Canvas>
    </div>
  )
}
