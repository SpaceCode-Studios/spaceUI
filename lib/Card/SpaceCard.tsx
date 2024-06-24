import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils";

type SpaceCardProps = {
  hideGlow: boolean;
  className?: string;
  children?: ReactNode;
};

export const SpaceCard: React.FC<SpaceCardProps> = ({
  hideGlow = true,
  children,
  className,
}) => {
  return (
    <BackgroundGradient hidden={hideGlow}>
      <div
        className={`${hideGlow === true ? "text-black p-3 z-10 bg-white rounded-lg border-[0.5px] border-black md:max-w-[30vw] max-w-[100vw]" : "text-black p-3 z-10 bg-white rounded-lg md:max-w-[30vw] max-w-[100vw]"} ${className}`}
      >
        <div
          className={`p-1 flex flex-col justify-between items-center ${className}`}
        >
          {children}
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default SpaceCard;

export const SpaceCardHeading: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <h1 className={`text-3xl text-center font-bold ${className}`}>
      {children}
    </h1>
  );
};

export const SpaceCardSubHeading: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <p
      className={`font-thin tracking-widest uppercase text-xs text-gray-400 pb-8 ${className}`}
    >
      {children}
    </p>
  );
};

export const SpaceCardContent: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <p className={`${"text-base"}, ${className}`}>{children}</p>;
};

export const SpaceCardFooter: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <footer
      className={`${"text-gray-400 text-xs pt-8 font-thin"}, ${className}`}
    >
      {children}
    </footer>
  );
};

const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  hidden = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  hidden: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div
      className={cn("p-[6px] group relative w-fit h-fit", containerClassName)}
    >
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`${hidden === false ? "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]" : "hidden"}`}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`${hidden === false ? "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]" : "hidden"}`}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
