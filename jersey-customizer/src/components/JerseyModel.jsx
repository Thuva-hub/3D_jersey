import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect } from 'react'

export default function JerseyModel({ selectedColor }) {
  const { scene } = useGLTF('/models/bike_taupo_mens_trail_jersey.glb')
  const designTexture = useTexture('/textures/Image_2.jpg')

  useEffect(() => {
    // Texture setup for correct alignment
      designTexture.encoding = THREE.sRGBEncoding      // fix missing encoding
      designTexture.flipY = true                     // 👈 this is critical
      designTexture.center.set(0.5, 0.5)
      designTexture.offset.set(0, 0)
      designTexture.repeat.set(1, 1)
      designTexture.rotation = Math.PI                 // 180°
      designTexture.needsUpdate = true

      

    scene.traverse((child) => {
      if (child.isMesh && child.material && child.material.isMeshStandardMaterial) {
        child.material.map = designTexture
        child.material.color.set('#ffffff')
        child.material.roughness = 1
        child.material.metalness = 0
        child.material.needsUpdate = true

      if (!child.geometry.attributes.uv) {
        console.warn('❗ No UV coordinates found on:', child.name)
      }
    }
    })
  }, [scene, designTexture])

  return (
    <primitive
      object={scene}
      scale={[7, 7, 7]}
      position={[0, -1.5, 0]}
      rotation={[0, Math.PI, 0]}
    />
  )
}
