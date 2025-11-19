"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const stars: { x: number; y: number; size: number; brightness: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate faint distant stars
    for (let i = 0; i < 180; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.2,
        brightness: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      time += 0.001;

      // Very slow rotating nebula glow
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.cos(time) * 300,
        canvas.height / 2 + Math.sin(time) * 300,
        0,
        canvas.width / 2,
        canvas.height / 2,
        800
      );
      gradient.addColorStop(0, "rgba(10, 0, 30, 0.06)");
      gradient.addColorStop(1, "rgba(0, 0, 15, 0)");

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw faint stars
      stars.forEach((s) => {
        const twinkle = Math.sin(time * 10 + s.x) * 0.1 + 0.9;
        ctx.fillStyle = `rgba(220, 220, 255, ${s.brightness * twinkle})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
