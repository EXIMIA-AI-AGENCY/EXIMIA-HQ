'use client';

import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'motion/react';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: number;
    duration?: number;
    durationOnHover?: number;
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    className?: string;
    speed?: number;
    speedOnHover?: number;
};

export function InfiniteSlider({
    children,
    gap = 16,
    duration = 25,
    durationOnHover,
    direction = 'horizontal',
    reverse = false,
    className,
    speed,
    speedOnHover,
}: InfiniteSliderProps) {
    const [currentDuration, setCurrentDuration] = useState(duration);
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [key, setKey] = useState(0);

    useEffect(() => {
        let controls;
        const size = direction === 'horizontal' ? width : height;
        const contentSize = size + gap;
        const from = reverse ? -contentSize / 2 : 0;
        const to = reverse ? 0 : -contentSize / 2;

        if (isHovered && (durationOnHover || speedOnHover)) {
            const hoverSpeed = speedOnHover ? contentSize / speedOnHover : durationOnHover;
            controls = animate(translation, [from, to], {
                ease: 'linear',
                duration: hoverSpeed,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onComplete: () => {
                    translation.set(from);
                },
            });
        } else {
            const normalSpeed = speed ? contentSize / speed : duration;
            controls = animate(translation, [from, to], {
                ease: 'linear',
                duration: normalSpeed,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onComplete: () => {
                    translation.set(from);
                },
            });
        }

        return () => controls?.stop();
    }, [key, translation, width, height, gap, isHovered, duration, durationOnHover, reverse, direction, speed, speedOnHover]);

    return (
        <div
            className={cn('overflow-hidden', className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className={cn('flex', direction === 'vertical' && 'flex-col')}
                style={{
                    ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
                    gap: `${gap}px`,
                }}
                ref={ref}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
