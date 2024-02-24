import {
  faCirclePlus,
  faExternalLink,
  faSquareCaretDown,
  faClone,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import toast from "react-hot-toast";
import OrderResume from "../../../components/OrderResume";
import { Checkbox, Menu, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import useStore from "../../../Context/ContextApp";
import { memo, useEffect, useState } from "react";
import { useToggleList } from "../../../customHooks/ToggleList";
import Row from "./Row";

const Table = () => {
  console.log("table rendered");
  const [opened, { open, close }] = useDisclosure(false);
  const [hook, setHook] = useState(false);
  const { list, toggleList, setList } = useToggleList();
  const { currentData } = useStore();

  // const data = new Array(30).fill(null);

  const ArrowsIcon = () => {
    return (
      <svg
        className="w-3 h-3 ms-1.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
      </svg>
    );
  };
  useEffect(() => {
    console.log(currentData);
  }, []);

  return (
    <div className=" mt-4 ">
      {/* <Modal
        size="calc(100vw - 3rem)"
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          // blur: 3,
        }}
      >
        <OrderResume />
      </Modal> */}
      <div className="flex flex-wrap gap-1 text-sm mb-4">
        {" "}
        <div>
          <span className="font-semibold">Pagina:</span> 1 de 1,
        </div>
        <div>
          <span className="font-semibold">Total Filtrado:</span> 97,
        </div>
        <div>
          <span className="font-semibold">Total:</span> 899,
        </div>
        <div>
          <span className="font-semibold">Filas seleccioandas:</span>{" "}
          {list.length}
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full  text-xs  ">
          <thead className="text-[14px] cursor-pointer  select-none  text-gray-700 capitalize bg-gray-50">
            <tr className="">
              <th
                scope="col"
                className="sticky border border-slate-300 top-0 bg-white z-20 left-0  px-2 py-2"
              >
                <div
                  onClick={() => setList([])}
                  className="flex justify-center items-center"
                >
                  <Checkbox />
                </div>
              </th>
              <th
                scope="col"
                className="sticky border border-slate-300 top-0 z-20 left-9 bg-white px-2 py-2"
              >
                Inf.
              </th>
              <th
                scope="col"
                className="sticky border border-slate-300 top-0 z-10 bg-white px-2 py-2"
              >
                <div className="flex justify-center items-center">
                  Or.
                  <a href="#">
                    <ArrowsIcon />
                  </a>
                </div>
              </th>
              <th
                scope="col"
                className="sticky border border-slate-300 top-0 z-10 bg-white px-5 py-2"
              >
                <div className="flex items-center justify-center">
                  Id
                  <a href="#">
                    <ArrowsIcon />
                  </a>
                </div>
              </th>
              <th
                scope="col"
                className="sticky border border-slate-300 top-0 z-10 bg-white px-2 py-2"
              >
                <div className="flex items-center justify-center" />
              </th>
              <th
                scope="col"
                className="sticky border border-slate-300 top-0 z-10 bg-white px-6 py-2"
              >
                <div className="flex items-center justify-center">
                  Estatus
                  <a href="#">
                    <ArrowsIcon />
                  </a>
                </div>
              </th>{" "}
              <th
                scope="col"
                className="sticky border border-slate-300 top-0 z-10 bg-white px-6 py-2"
              >
                <div className="flex items-center justify-center">
                  Cliente
                  <a href="#">
                    <ArrowsIcon />
                  </a>
                </div>
              </th>
              <th
                scope="col"
                className="sticky border border-slate-300 top-0 z-10 bg-white px-6 py-2"
              >
                <div className="flex items-center justify-center">
                  Paqueteria
                  <a href="#">
                    <ArrowsIcon />
                  </a>
                </div>
              </th>
              <th
                scope="col"
                className="sticky border border-slate-300 top-0 z-10 bg-white px-6 py-2"
              >
                <div className="flex items-center justify-center">
                  Qty
                  <a href="#">
                    <ArrowsIcon />
                  </a>
                </div>
              </th>{" "}
              <th
                scope="col"
                className="sticky border border-slate-300 top-0 z-10 bg-white px-6 py-2"
              >
                <div className="flex items-center justify-center">
                  Total
                  <a href="#">
                    <ArrowsIcon />
                  </a>
                </div>
              </th>
              <th
                scope="col"
                className="sticky border border-slate-300 top-0 z-10 bg-white px-6 py-2"
              >
                <div className="flex items-center justify-center">
                  Fecha
                  <a href="#">
                    <ArrowsIcon />
                  </a>
                </div>
              </th>
              <th
                scope="col"
                className="sticky top-0 border border-slate-300 right-0 z-20 bg-white px-1 py-2"
              >
                <div className="flex items-center justify-center">Op.</div>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {currentData.map((order, i) => (
              <Row order={order} key={i} toggleList={toggleList} list={list} />
            ))}
          </tbody>
        </table>
      </div>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing
          <span className="font-semibold text-gray-900">1-10</span>
          of
          <span className="font-semibold text-gray-900">1000</span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              1
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default memo(Table);
