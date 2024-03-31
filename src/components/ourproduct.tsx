import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import ComputersCanvas1 from "./canvas/computerop";

// Hero
export const OpJI = () => {
  return (
      <section
      className="relative w-full h-screen mx-auto"
      style={{
        backgroundImage: 'url("src/assets/normalbg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5",
        )}
      >
        {/* Title */}
        <div className="flex flex-col">
  <h1 className={cn(styles.heroHeadText, "text-white")}>
    OUR MODEL
    
  </h1>
  <span className="text-[#ffdd45] font-serif" style={{ fontSize: "5em" }}>OUR MODEL IS INTEGRATED </span>
</div>



      </div>

      {/* Computer Model */}
      <ComputersCanvas1/>

      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
