import useWindowSize from "@rooks/use-window-size";
import ParticleImage, { Vector, forces } from "react-particle-image";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50 || pixel.r > 50 || pixel.y > 50;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);

    const result = pixel.b > 50
      ? "#0093D3"
      : pixel.r > 50 && pixel.g < 50 && pixel.b < 50
      ? "#E61B1F"
      : pixel.r >= 50 && pixel.g >= 50 && pixel.b < 50
      ? "#F8EA1B"
      : pixel.r >= 50 && pixel.g >=50 && pixel.b >= 50 && '#ffffff'
    // return "#0093D3"
    console.log({
      red: pixel.r,
      green: pixel.g,
      blue: pixel.b,
      color: result
    })

    return result
  },
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 50,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 15);
};

export default function LogoParticles() {
  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <ParticleImage
      src={"/logo1.jpeg"}
      width={Number(innerWidth)}
      height={Number(innerHeight)}
      scale={0.75}
      entropy={20}
      maxParticles={4000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="transparent"
      className="logo-particle-container"
    />
  );
}
