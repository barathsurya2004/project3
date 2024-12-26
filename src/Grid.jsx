import React, { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import gsap from "gsap";

const Grid = () => {
  const shaderRef = useRef();
  const { size, camera } = useThree(); // Access screen size and camera
  console.log(size, camera);
  const mouse = useRef([0, 0]);
  const isMoving = useRef(true); // Track if the mouse is moving
  const distortionVisibility = useRef({ value: 1.0 }); // Control distortion visibility
  let inactivityTimeout = useRef(null);

  // Track mouse movement
  const handleMouseMove = (event) => {
    mouse.current = [
      (event.clientX / window.innerWidth) * 2 - 1, // Normalize X to [-1, 1]
      -(event.clientY / window.innerHeight) * 2 + 1, // Normalize Y to [-1, 1]
    ];

    // Clear the inactivity timeout and reset distortion visibility
    clearTimeout(inactivityTimeout.current);
    isMoving.current = true;
    distortionVisibility.current.value = 1.0;

    // Set a timeout to turn off distortion after 5 seconds of inactivity
    inactivityTimeout.current = setTimeout(() => {
      isMoving.current = false;
      gsap.to(distortionVisibility.current, { value: 0.0, duration: 1.0 });
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Update uniforms for mouse position and distortion visibility
  useFrame(() => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uMouse.value = [
        mouse.current[0] * 20,
        mouse.current[1] * 10,
      ];
      shaderRef.current.uniforms.uVisibility.value =
        distortionVisibility.current.value;
    }
  });

  // Calculate plane dimensions based on the screen size and camera zoom
  const planeWidth = (size.width / size.height) * camera.zoom; // Aspect ratio * zoom
  const planeHeight = camera.zoom * 2; // Top/bottom frustum bounds * 2

  return (
    <mesh>
      <planeGeometry args={[planeWidth, planeHeight, 100, 100]} />
      <shaderMaterial
        ref={shaderRef}
        uniforms={{
          uMouse: { value: [0, 0] }, // Mouse position uniform
          uCircleRadius: { value: 5.0 }, // Circle radius uniform
          uVisibility: { value: 1.0 }, // Control distortion visibility
        }}
        vertexShader={`  
          varying vec3 vPosition;
          void main() {
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`  
          varying vec3 vPosition;

          uniform vec2 uMouse;
          uniform float uCircleRadius;
          uniform float uVisibility;

          void main() {
            // Calculate distance from the current fragment to the mouse position
            float dist = distance(vPosition.xy, uMouse);

            // Apply distortion effect
            vec2 distortion = vPosition.xy - uMouse;
            distortion *= smoothstep(uCircleRadius, 0.0, dist) * 0.2 * uVisibility;

            // Grid effect
            float gridSize = 2.0; // Adjust the grid cell size
            float lineWidth = 0.02; // Adjust the grid line thickness
            vec2 gridPos = mod(vPosition.xy + distortion, gridSize);
            bool isLineX = gridPos.x < lineWidth || gridPos.x > (gridSize - lineWidth);
            bool isLineY = gridPos.y < lineWidth || gridPos.y > (gridSize - lineWidth);

            // Distorted gridlines
            if (isLineX || isLineY) {
              gl_FragColor = vec4(0.117647, 0.117647, 0.117647, 1.0); // Gridline color
              } else {
                gl_FragColor = vec4(0.062745, 0.062745, 0.062745, 0.0); // Background color
            }
          }
        `}
      />
    </mesh>
  );
};

export default Grid;
