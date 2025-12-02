import { cn } from '@/lib/utils';

interface ProgressiveBlurProps {
    className?: string;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    blurIntensity?: number;
}

export function ProgressiveBlur({ className, direction = 'bottom', blurIntensity = 1 }: ProgressiveBlurProps) {
    const gradientStyle = {
        maskImage: `linear-gradient(to ${direction}, black, transparent)`,
        WebkitMaskImage: `linear-gradient(to ${direction}, black, transparent)`,
        backdropFilter: `blur(${blurIntensity * 10}px)`,
    };

    return (
        <div
            className={cn('pointer-events-none', className)}
            style={gradientStyle}
        />
    );
}
