import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("z-10 flex items-center justify-center rounded-full bg-white shadow-[0px_15px_40px_0px_rgba(0,0,0,0.15)]", className)}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function LeadSources() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (
    <div
      className='relative flex w-full items-center justify-center'
      ref={containerRef}
    >
      <div className='flex size-full flex-col max-w-xl items-stretch justify-between'>
        <div className='flex flex-row items-center justify-between'>
          <Circle
            ref={div1Ref}
            className='size-16 p-3 -mb-6 sm:-mb-12'
          >
            <img
              src='/images/facebook.png'
              alt='facebook'
            />
          </Circle>
          <Circle
            ref={div5Ref}
            className='size-16 p-3 -mb-6 sm:-mb-12'
          >
            <img
              src='/images/instagram.png'
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
              src='/images/tiktok.png'
              alt='tiktok'
            />
          </Circle>
          <Circle
            ref={div4Ref}
            className='size-40 sm:size-48 p-0 rounded-full overflow-hidden'
          >
            <img
              src='/images/laptop-on-desk.png'
              alt='orthoboost'
            />
          </Circle>
          <Circle
            ref={div6Ref}
            className='size-16 p-3'
          >
            <img
              src='/images/google.png'
              alt='google'
            />
          </Circle>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <Circle
            ref={div3Ref}
            className='size-16 p-3 -mt-6 sm:-mt-12'
          >
            <img
              src='/images/calls.png'
              alt='calls'
            />
          </Circle>
          <Circle
            ref={div7Ref}
            className='size-16 p-3 -mt-6 sm:-mt-12'
          >
            <img
              src='/images/messenger.png'
              alt='messenger'
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        delay={0}
        duration={18}
        gradientStartColor={"#2563eb"}
        gradientStopColor={"#06b6d4"}
        repeatDelay={Math.random() * 2 - 16}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-80}
        endYOffset={-30}
      />
      <AnimatedBeam
        delay={.4}
        duration={18}
        gradientStartColor={"#2563eb"}
        gradientStopColor={"#06b6d4"}
        repeatDelay={Math.random() * 2 - 16}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        delay={.8}
        duration={18}
        gradientStartColor={"#2563eb"}
        gradientStopColor={"#06b6d4"}
        repeatDelay={Math.random() * 2 - 16}
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={80}
        endYOffset={30}
      />
      <AnimatedBeam
        delay={.2}
        duration={18}
        gradientStartColor={"#2563eb"}
        gradientStopColor={"#06b6d4"}
        repeatDelay={Math.random() * 2 - 16}
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-80}
        endYOffset={-30}
        reverse
      />
      <AnimatedBeam
        delay={.6}
        duration={18}
        gradientStartColor={"#2563eb"}
        gradientStopColor={"#06b6d4"}
        repeatDelay={Math.random() * 2 - 16}
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        delay={1}
        duration={18}
        gradientStartColor={"#2563eb"}
        gradientStopColor={"#06b6d4"}
        repeatDelay={Math.random() * 2 - 16}
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={80}
        endYOffset={30}
        reverse
      />
    </div>
  );
}
