import { Barcode, Location, InfoCircle, Map } from "iconsax-react";

const EmployeeSpotlight = () => {
  return (
    <div className="border text-gray-500 w-full p-3 rounded-2xl space-y-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm gap-2">
          <InfoCircle size={18} />
          <p className="text-gray-800 font-medium">Information</p>
        </div>
      </div>

      <hr className="bg-gray-400 my-4" />

      {/* content */}
      <div className="space-y-3">
        {/* note 1 */}
        <div className="flex items-start gap-3 w-full">
          <Location size={22} variant="Bulk" className="text-sky-500" />
          <div className="w-full space-y-1 columns-1 sm:columns-1 lg:columns-2">
            <p className="text-sm text-gray-800 font-medium">Location</p>
            <p className="text-sm">Telkom Tower</p>
          </div>
        </div>

        <hr className="bg-gray-400" />

        {/* note 2 */}
        <div className="flex items-start gap-3 w-full">
          <Map size={22} variant="Bulk" className="text-sky-500" />
          <div className="w-full space-y-1 columns-1 sm:columns-1 lg:columns-2">
            <p className="text-sm text-gray-800 font-medium">Coordinate</p>
            <p className="text-sm">-6.229906780693371, 106.81894197489417</p>
          </div>
        </div>

        <hr className="bg-gray-400" />

        {/* note 2 */}
        <div className="flex items-start gap-3 w-full">
          <Barcode size={22} variant="Bulk" className="text-sky-500" />
          <div className="w-full space-y-1 columns-1 sm:columns-1 lg:columns-2">
            <p className="text-sm text-gray-800 font-medium">Unit Code</p>
            <p className="text-sm">001</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSpotlight;
