import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Grain = () => {
  const materialRef = useRef(); // Reference to the shader material
  const uTime = useRef(0);
  const randomSeed = useRef(Math.random()); // Initialize a random seed

  useFrame(() => {
    uTime.current += 0.5; // Increment time
    if (materialRef.current) {
      // Update the shader uniform values
      materialRef.current.uniforms.uTime.value = uTime.current;

      // Change the random seed periodically to shift the noise
      if (Math.floor(uTime.current) % 2 === 0) {
        randomSeed.current = Math.random();
        materialRef.current.uniforms.randomSeed.value = randomSeed.current;
      }
    }
  });

  return (
    <mesh>
      <planeGeometry args={[32, 32]} />
      <shaderMaterial
        ref={materialRef} // Attach ref to access the material
        vertexShader={`
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform float randomSeed;
          varying vec2 vUv;

          // GLSL Perlin noise implementation
          vec2 hash(vec2 p) {
            p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
            return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
          }

          float perlinNoise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            vec2 u = f * f * (3.0 - 2.0 * f);

            return mix(
              mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                  dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
              mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                  dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
              u.y);
          }

          void main() {
            vec2 uv = vUv * 300.0 + vec2(randomSeed * 1000.0); // Randomize position
            float noise = perlinNoise(uv + uTime * 0.001); // Add animation
            vec3 color = vec3(noise);
            gl_FragColor = vec4(color, 0.56);
          }
        `}
        uniforms={{
          uTime: { value: 0 }, // Initialize time uniform
          randomSeed: { value: Math.random() }, // Initialize random seed uniform
        }}
      />
    </mesh>
  );
};

export default Grain;
