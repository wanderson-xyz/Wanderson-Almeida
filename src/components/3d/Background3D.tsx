'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import { useRef } from 'react'
import { Mesh } from 'three'

const FloatingGeometry = () => {
  const meshRef = useRef<Mesh>(null)

  return (
    <>
      {/* Main floating sphere */}
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={2}
        floatingRange={[-0.1, 0.1]}
      >
        <Sphere ref={meshRef} args={[1, 64, 64]} position={[2, 0, 0]}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Secondary smaller spheres */}
      <Float
        speed={1.5}
        rotationIntensity={0.5}
        floatIntensity={1}
        floatingRange={[-0.2, 0.2]}
      >
        <Sphere args={[0.5, 32, 32]} position={[-2, 1, -1]}>
          <MeshDistortMaterial
            color="#f97316"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.6}
          />
        </Sphere>
      </Float>

      <Float
        speed={1.8}
        rotationIntensity={0.8}
        floatIntensity={1.5}
        floatingRange={[-0.15, 0.15]}
      >
        <Sphere args={[0.3, 32, 32]} position={[0, -1.5, 1]}>
          <MeshDistortMaterial
            color="#a855f7"
            attach="material"
            distort={0.5}
            speed={1.8}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#6366f1" />
      <pointLight position={[0, 0, 10]} intensity={0.5} color="#f97316" />
    </>
  )
}

interface Background3DProps {
  className?: string
}

export const Background3D = ({ className = "" }: Background3DProps) => {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 75,
        }}
        style={{
          background: 'transparent',
        }}
      >
        <FloatingGeometry />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}