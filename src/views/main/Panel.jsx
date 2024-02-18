import NavBar from "../../components/NavBar";
import PillFilters from "./Filters/PillFilters";
import ButtonsContainer from "./HeaderButtons/ButtonsContainer";
import Table from "./Table/Table";

const Panel = () => {
  return (
    <NavBar>
      <div className="mt-2 ">Listado de Ordenes</div>
      <PillFilters />
      <ButtonsContainer />
      <Table />
    </NavBar>
  );
};

export default Panel;
