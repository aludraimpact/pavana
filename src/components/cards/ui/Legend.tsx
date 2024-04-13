import { motion } from "framer-motion";
import React from "react";

type PositionTypes = "center" | "left" | "right";
type LegendTypes = "round" | "square";

interface LegendProps {
  position?: PositionTypes;
  color?: string;
  legendType?: LegendTypes;
  label?: string;
}

const Legend = ({
  position = "center",
  color = "red",
  legendType = 'square',
  label,
}: LegendProps) => {
  const positionClass: Record<PositionTypes, string> = {
    center: "justify-center",
    left: "justify-start pr-2",
    right: "justify-end",
  };
  const legendClass: Record<LegendTypes, string> = {
    round: "rounded-full",
    square: "rounded-none",
  };

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "", opacity: 1 }}
      transition={{ duration: 0.2 }}
      className=""
    >
      <div className={`flex gap-2 w-full ${positionClass[position]}`}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "", opacity: 1, backgroundColor: `${color}` }}
          transition={{ duration: 0.2 }}
          className={`object-center w-3 shrink-0 mt-1 h-3 ${legendClass[legendType]}`}
        />
        <p className="text-sm">{label}</p>
      </div>
    </motion.div>
  );
};

export default Legend;
