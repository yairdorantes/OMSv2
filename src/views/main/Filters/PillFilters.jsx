import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterDates from "./FilterDates";
import OrderIDInput from "./OrderIDInput";
import SelectCourier from "./SelectCourier";
import SelectState from "./SelectState";
import TogglePurchase from "./TogglePurchase";
import ToggleStatus from "./ToggleStatus";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const PillFilters = () => {
  return (
    <div className="border-2 sticky  top-10 bg-white z-30 w-full py-4 px-2 flex items-center  gap-5 flex-wrap">
      <OrderIDInput />
      <SelectState />
      <SelectCourier />
      <FilterDates />
      <TogglePurchase />
      <ToggleStatus />
      <div
        id="clen-filters"
        className="rounded-full transition-all hover:bg-error text-gray-500 hover:text-white  flex items-center justify-center border w-9   h-9 "
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          className=" w-6 h-6 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default PillFilters;
