'use client'
import {useState,useRef,Suspense} from 'react'
import {Canvas,useFrame} from '@react-three/fiber'
import {Points,PointMaterial,Preload} from '@react-three/drei'
import { random } from 'maath';
import * as THREE from 'three';
function StarBackground(props: React.ComponentPropsWithoutRef<'group'>) {
    const ref = useRef<THREE.Points>(null!);
    const [sphere] = useState(() => Float32Array.from(random.inSphere(new Float64Array(5000 * 3), { radius: 1.2 })));
    useFrame((state,delta)=>{
        ref.current.rotation.x -= delta/10;
        ref.current.rotation.y -= delta /15;

    })
  return (
    <group rotation={[0,0,Math.PI/4]}>
        <Points
         ref={ref}
         stride={3}
         frustumCulled
         positions={sphere}
         {...props}
         >
            <PointMaterial
            transparent
            color="#fff"
            size={0.002}
            sizeAttenuation={true}
            depthWrite={false}
            />

        </Points>
    </group>
  )
}

const StarsCanvas = () =>{
   return <div className='w-full h-auto fixed inset-0 z-[20]'>
        <Canvas camera={{position:[0,0,1]}}>
            <Suspense fallback={null}>
                <StarBackground/>
            </Suspense>
            <Preload all/>
        </Canvas>
    </div>
}

export default StarsCanvas