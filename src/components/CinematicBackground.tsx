import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

export function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create mesh grid
    const gridSize = 50;
    const cols = Math.ceil(canvas.width / gridSize);
    const rows = Math.ceil(canvas.height / gridSize);
    let time = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // Draw animated grid
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          
          // Wave effect
          const wave = Math.sin(i * 0.1 + time) * Math.cos(j * 0.1 + time) * 10;
          const offsetY = y + wave;

          // Distance from center
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const dx = x - centerX;
          const dy = offsetY - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
          const distanceRatio = distance / maxDistance;

          // Color based on distance and wave
          const hue = 180 + distanceRatio * 60 + wave * 2;
          const opacity = (1 - distanceRatio) * 0.3;

          // Draw lines
          if (i < cols - 1) {
            const nextWave = Math.sin((i + 1) * 0.1 + time) * Math.cos(j * 0.1 + time) * 10;
            const nextY = y + nextWave;
            
            ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(x, offsetY);
            ctx.lineTo(x + gridSize, nextY);
            ctx.stroke();
          }

          if (j < rows - 1) {
            const nextWave = Math.sin(i * 0.1 + time) * Math.cos((j + 1) * 0.1 + time) * 10;
            const nextY = y + gridSize + nextWave;
            
            ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(x, offsetY);
            ctx.lineTo(x, nextY);
            ctx.stroke();
          }

          // Draw intersection points
          if (Math.random() > 0.99) {
            const gradient = ctx.createRadialGradient(x, offsetY, 0, x, offsetY, 3);
            gradient.addColorStop(0, `hsla(${hue}, 100%, 70%, 0.8)`);
            gradient.addColorStop(1, `hsla(${hue}, 100%, 70%, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, offsetY, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
    </>
  );
}
