export const CustomPandiShaderMaterial = () => {
  return (
    <shaderMaterial
      attach={"material"}
      vertexShader={`
        varying vec3 vPosition;

      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      } 
        `}
      fragmentShader={`
        varying vec3 vPosition;

    void main() {
      float opacity =smoothstep(-1.0,1.0,-vPosition.y*28.528);
      gl_FragColor = vec4(0.238, 0.162, 0.325, opacity);
    } 
        `}
      transparent
    />
  );
};

export const CustomChettiShaderMaterial = () => {
  return (
    <shaderMaterial
      attach={"material"}
      vertexShader={`
        varying vec3 vPosition;

      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      } 
        `}
      fragmentShader={`
        varying vec3 vPosition;

    void main() {
      float opacity =smoothstep(-1.0,1.0,-vPosition.y*28.528);
      gl_FragColor = vec4(0.238, 0.162, 0.325, opacity);
    } 
        `}
      transparent
    />
  );
};
