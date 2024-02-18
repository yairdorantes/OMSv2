import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FilterDates = () => {
  return (
    <div>
      <button className="border text-white px-3 p-1 rounded-lg">
        <FontAwesomeIcon
          icon={faCalendar}
          className="text-gray-500 w-7 h-6 cursor-pointer "
        />
      </button>
    </div>
  );
};

export default FilterDates;
