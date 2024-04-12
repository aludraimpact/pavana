import {
  Health,
} from "iconsax-react";
import ProgressBar from "./ui/ProgressBar";

const FunctionUnit = () => {
  const functionPercentage: Record<string, number> = {
    agigator: 70,
    circulator: 85,
    airPump: 60,
  };

  return (
    <div className="border text-gray-500 w-full p-3 rounded-2xl space-y-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm gap-2">
          <Health size={18} />
          <p className="text-gray-800 font-medium">Function Unit 001</p>
        </div>
      </div>

      <hr className="bg-gray-400 my-4" />

      {/* content */}
      <div className="space-y-5">
        {/* note 1 */}
        <div className="flex items-start gap-3 w-full">
          <div className="w-full space-y-1 columns-1 sm:columns-1 lg:columns-2">
            <p className="text-sm text-gray-800 font-medium">Agitator</p>
            <ProgressBar percentage={functionPercentage.agigator} />
          </div>
        </div>
        {/* note 1 */}
        <div className="flex items-start gap-3 w-full">
          <div className="w-full space-y-1 columns-1 sm:columns-1 lg:columns-2">
            <p className="text-sm text-gray-800 font-medium">Circulator</p>
            <ProgressBar percentage={functionPercentage.circulator} />
          </div>
        </div>
        {/* note 1 */}
        <div className="flex items-start gap-3 w-full">
          <div className="w-full space-y-1 columns-1 sm:columns-1 lg:columns-2">
            <p className="text-sm text-gray-800 font-medium">Air Pump</p>
            <ProgressBar percentage={functionPercentage.airPump} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionUnit;
