import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox, Environment } from '@react-three/drei'
import type { Group, Mesh } from 'three'

function Tablet() {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.4}>
      <group ref={ref}>
        {/* Main tablet body */}
        <RoundedBox args={[2.8, 1.8, 0.08]} radius={0.08} smoothness={4}>
          <meshPhysicalMaterial
            color="#1a1a2e"
            metalness={0.3}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={0.8}
          />
        </RoundedBox>

        {/* Screen */}
        <RoundedBox args={[2.5, 1.5, 0.01]} radius={0.04} smoothness={4} position={[0, 0, 0.05]}>
          <meshPhysicalMaterial
            color="#6366f1"
            metalness={0.1}
            roughness={0.3}
            emissive="#6366f1"
            emissiveIntensity={0.15}
            clearcoat={0.5}
          />
        </RoundedBox>

        {/* Screen UI elements — simplified POS grid */}
        {[[-0.8, 0.35], [-0.3, 0.35], [0.2, 0.35], [0.7, 0.35],
          [-0.8, -0.15], [-0.3, -0.15], [0.2, -0.15], [0.7, -0.15]].map(([x, y], i) => (
          <RoundedBox key={i} args={[0.4, 0.35, 0.005]} radius={0.03} smoothness={2} position={[x, y, 0.07]}>
            <meshPhysicalMaterial
              color={i < 4 ? '#818cf8' : '#a5b4fc'}
              metalness={0}
              roughness={0.5}
              emissive={i < 4 ? '#818cf8' : '#a5b4fc'}
              emissiveIntensity={0.08}
              transparent
              opacity={0.6}
            />
          </RoundedBox>
        ))}

        {/* Cart panel on right */}
        <RoundedBox args={[0.6, 1.5, 0.005]} radius={0.03} smoothness={2} position={[1.15, 0, 0.065]}>
          <meshPhysicalMaterial
            color="#e0e7ff"
            metalness={0}
            roughness={0.6}
            transparent
            opacity={0.3}
          />
        </RoundedBox>
      </group>
    </Float>
  )
}

function OrbitingElement({ radius, speed, offset, size, color, shape }: {
  radius: number; speed: number; offset: number; size: number; color: string; shape: 'cube' | 'sphere' | 'ring'
}) {
  const ref = useRef<Group>(null)

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + offset
      ref.current.position.x = Math.cos(t) * radius
      ref.current.position.z = Math.sin(t) * radius * 0.5
      ref.current.position.y = Math.sin(t * 1.5) * 0.3
      ref.current.rotation.x = t * 0.5
      ref.current.rotation.z = t * 0.3
    }
  })

  return (
    <group ref={ref}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
        {shape === 'cube' && (
          <RoundedBox args={[size, size, size]} radius={size * 0.15} smoothness={2}>
            <meshPhysicalMaterial
              color={color}
              metalness={0.4}
              roughness={0.15}
              clearcoat={1}
              clearcoatRoughness={0.05}
              envMapIntensity={1}
              transparent
              opacity={0.85}
            />
          </RoundedBox>
        )}
        {shape === 'sphere' && (
          <mesh>
            <sphereGeometry args={[size * 0.5, 16, 16]} />
            <meshPhysicalMaterial
              color={color}
              metalness={0.5}
              roughness={0.1}
              clearcoat={1}
              envMapIntensity={1.2}
              transparent
              opacity={0.8}
            />
          </mesh>
        )}
        {shape === 'ring' && (
          <mesh rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[size * 0.5, size * 0.1, 8, 24]} />
            <meshPhysicalMaterial
              color={color}
              metalness={0.6}
              roughness={0.1}
              clearcoat={1}
              envMapIntensity={1}
              transparent
              opacity={0.7}
            />
          </mesh>
        )}
      </Float>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, 2, 4]} intensity={0.5} color="#6366f1" />
      <pointLight position={[3, -2, 2]} intensity={0.3} color="#818cf8" />

      <Tablet />

      {/* Orbiting objects — representing features */}
      <OrbitingElement radius={2.5} speed={0.4} offset={0} size={0.25} color="#6366f1" shape="cube" />
      <OrbitingElement radius={2.8} speed={0.3} offset={2} size={0.2} color="#818cf8" shape="sphere" />
      <OrbitingElement radius={2.2} speed={0.5} offset={4} size={0.35} color="#a5b4fc" shape="ring" />
      <OrbitingElement radius={3} speed={0.25} offset={1} size={0.18} color="#c7d2fe" shape="cube" />
      <OrbitingElement radius={2.6} speed={0.35} offset={3.5} size={0.22} color="#6366f1" shape="sphere" />

      <Environment preset="city" />
    </>
  )
}

export default function POSScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 5], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  )
}
