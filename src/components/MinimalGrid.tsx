import { useEffect, useRef } from 'react';

export function MinimalGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        let time = 0;
        const gridSize = 60;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.005;

            // Draw subtle grid lines
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;

            // Vertical lines
            for (let x = 0; x < canvas.width; x += gridSize) {
                const offset = Math.sin(time + x * 0.01) * 5;
                ctx.beginPath();
                ctx.moveTo(x + offset, 0);
                ctx.lineTo(x + offset, canvas.height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = 0; y < canvas.height; y += gridSize) {
                const offset = Math.cos(time + y * 0.01) * 5;
                ctx.beginPath();
                ctx.moveTo(0, y + offset);
                ctx.lineTo(canvas.width, y + offset);
                ctx.stroke();
            }

            // Draw intersection points (very subtle)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
            for (let x = 0; x < canvas.width; x += gridSize) {
                for (let y = 0; y < canvas.height; y += gridSize) {
                    const xOffset = Math.sin(time + x * 0.01) * 5;
                    const yOffset = Math.cos(time + y * 0.01) * 5;
                    const pulse = Math.sin(time * 2 + x * 0.02 + y * 0.02) * 0.5 + 0.5;

                    if (pulse > 0.8) {
                        ctx.beginPath();
                        ctx.arc(x + xOffset, y + yOffset, 1.5, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.4 }}
        />
    );
}
