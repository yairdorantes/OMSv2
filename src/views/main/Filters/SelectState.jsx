import Select from "react-select";

const options = [
  { value: 1, label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const SelectState = () => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "100px",
      marginTop: 0,
      height: "34px",
      "min-height": "34px",
    }),
  };
  console.log(customStyles);

  return (
    <div>
      <Select
        // onChange={()}
        placeholder="Estatus"
        options={options}
        isSearchable={true}
        isClearable={true}
        styles={customStyles}
        className="text-sm text-gray-500 w-44"
      />
    </div>
  );
};

export default SelectState;
