import React, { useEffect, useRef } from "react";

function Particle({ x, y, vx, vy, radius }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const draw = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = "#0093D3";
      ctx.fill();
    };

    draw();
  }, [x, y, radius]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        left: x,
        top: y,
      }}
      width={radius * 2}
      height={radius * 2}
    />
  );
}

function BgParticleContainer() {
  const particles = [];

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const container = document.getElementById("particle-container");

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    container.appendChild(canvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
        }

        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1, // Adjust velocity range and speed here
        vy: (Math.random() - 0.5) * 1, // Adjust velocity range and speed here
        radius: Math.random() * 2,
        draw: () => {},
      });
    }

    particles.forEach((particle) => {
      particle.draw = () => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = "#0093D3";
        ctx.fill();
      };
    });

    animate();

    return () => {
      container.removeChild(canvas);
    };
  }, []);

  return (
    <div
      id="particle-container"
      style={{ position: "absolute", top: 0, width: "100vw", height: "100vh" }}
    />
  );
}

export default BgParticleContainer;
