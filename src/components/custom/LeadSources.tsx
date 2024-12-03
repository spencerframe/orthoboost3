import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("z-10 flex items-center justify-center rounded-full bg-white shadow-[0px_15px_40px_0px_rgba(0,0,0,0.1)]", className)}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function LeadSources() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className='relative flex w-full items-center justify-center'
      ref={containerRef}
    >
      <div className='flex size-full flex-col max-w-xl items-stretch justify-between gap-5'>
        <div className='flex flex-row items-center justify-between'>
          <Circle
            ref={div1Ref}
            className='size-16 p-3'
          >
            <img
              src='src/lib/facebook.png'
              alt='facebook'
            />
          </Circle>
          <Circle
            ref={div5Ref}
            className='size-16 p-3'
          >
            <img
              src='src/lib/instagram.png'
              alt='instagram'
            />
          </Circle>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <Circle
            ref={div2Ref}
            className='size-16 p-3'
          >
            <img
              src='src/lib/tiktok.png'
              alt='tiktok'
            />
          </Circle>
          <Circle
            ref={div4Ref}
            className='size-32 p-8'
          >
            <img
              src='src/lib/orthoboost.png'
              alt='orthoboost'
            />
          </Circle>
          <Circle
            ref={div6Ref}
            className='size-16 p-3'
          >
            <img
              src='src/lib/google.png'
              alt='google'
            />
          </Circle>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <Circle
            ref={div3Ref}
            className='size-16 p-3'
          >
            <img
              src='src/lib/calls.png'
              alt='calls'
            />
          </Circle>
          <Circle
            ref={div7Ref}
            className='size-16 p-3'
          >
            <img
              src='src/lib/messenger.png'
              alt='messenger'
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
