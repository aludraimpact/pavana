import { motion } from "framer-motion";

const ProgressBar = ({percentage}: {percentage: number}) => {
  return (
    <div className="bar-graph h-6 w-full bg-primary/60 rounded-full text-center">
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "", width: `${percentage}%`, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="justify-center h-full duration-200 bg-primary rounded-full"
      >
        <motion.span className="text-yellow-50 text-xs">{`${percentage}%`}</motion.span>
      </motion.div>
    </div>
  );
};

export default ProgressBar;
