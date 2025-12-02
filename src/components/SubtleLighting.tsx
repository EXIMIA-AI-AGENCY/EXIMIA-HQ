import { useEffect, useRef } from 'react';

export function SubtleLighting() {
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

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.003;

            // Create subtle light beams from top
            const beamCount = 3;
            for (let i = 0; i < beamCount; i++) {
                const x = (canvas.width / (beamCount + 1)) * (i + 1);
                const offset = Math.sin(time + i * 2) * 100;

                const gradient = ctx.createLinearGradient(
                    x + offset,
                    0,
                    x + offset,
                    canvas.height * 0.6
                );

                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.02)');
                gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.01)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.fillStyle = gradient;
                ctx.fillRect(x + offset - 50, 0, 100, canvas.height * 0.6);
            }

            // Subtle radial glow from center
            const centerGradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                canvas.width * 0.5
            );

            const pulseOpacity = Math.sin(time * 0.5) * 0.01 + 0.02;
            centerGradient.addColorStop(0, `rgba(255, 255, 255, ${pulseOpacity})`);
            centerGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.005)');
            centerGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.fillStyle = centerGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

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
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.3 }}
        />
    );
}
