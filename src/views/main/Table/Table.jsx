import {
  faCirclePlus,
  faExternalLink,
  faSquareCaretDown,
  faClone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import toast from "react-hot-toast";
import OrderResume from "../../../components/OrderResume";
import { Checkbox, Menu, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Table = () => {
  console.log("table rendered");
  const [opened, { open, close }] = useDisclosure(false);

  const data = new Array(30).fill(null);

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

  const copyOrderId = (value) => {
    toast.success(`Copiado: ${value}`, { position: "top-right" });
    navigator.clipboard.writeText(value);
  };

  return (
    <div className=" mt-4 ">
      <Modal
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
      </Modal>
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
          <span className="font-semibold">Filas seleccioandas:</span> 25
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
                <div className="flex justify-center items-center">
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
            {data.map((order, i) => (
              <tr
                key={i}
                className="even:bg-white odd:bg-gray-200  text-center border-b"
              >
                <td className="px-2 py-2 bg-white sticky left-0 border border-slate-300">
                  <Checkbox />
                </td>

                <td
                  scope="row"
                  onClick={open}
                  className="px-2 cursor-pointer  sticky left-9 bg-white border py-2  text-gray-900 "
                >
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    className="w-6 h-6 text-teal-500"
                  />
                </td>
                <td className="px-2 py-2 border border-slate-300 ">
                  <img
                    src="https://creaprac.com/wp-content/uploads/2022/03/mexico.png"
                    alt=""
                    className="w-8 mx-auto"
                  />
                </td>
                <td className="px-5 cursor-pointer py-2   text-blue-600 font-semibold whitespace-nowrap border">
                  1411530563897-01(1675167)
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className="w-4 h-4 mx-1 text-blue-600"
                  />
                  <FontAwesomeIcon
                    icon={faClone}
                    onClick={() => copyOrderId("jaja")}
                    className="w-4 h-4 text-blue-600"
                  />
                </td>
                <td className="px-2 py-2 border  border-slate-300">
                  <div className="w-4 h-4 mx-auto  rounded-full bg-success" />
                </td>
                <td className="px-6 py-2 border whitespace-nowrap border-slate-300">
                  Listo para manejo{" "}
                </td>
                <td className="px-6 py-2 border whitespace-nowrap border-slate-300">
                  Jesus Alberto Villanueva Salazar{" "}
                </td>
                <td className="px-6 whitespace-nowrap py-2 border border-slate-300">
                  DHL economy - Zona AD{" "}
                </td>
                <td className="px-6 py-2 border border-slate-300">1000</td>
                <td className="px-6 py-2 border border-slate-300">$2,709.00</td>
                <td className="px-6 py-2 whitespace-nowrap border-slate-300">
                  17-02-2024 08:48:10 PM
                </td>
                <td className="sticky right-0 bg-white px-1 py-2 border border-slate-300">
                  <Menu
                    transitionProps={{
                      transition: "rotate-right",
                      duration: 150,
                    }}
                    position="left-start"
                  >
                    <Menu.Target>
                      <FontAwesomeIcon
                        icon={faSquareCaretDown}
                        className="w-6 h-6 text-blue-600"
                      />
                    </Menu.Target>
                    <Menu.Dropdown offset={8}>
                      {/* Menu items */}
                      <Menu.Item
                      // leftSection={}
                      // disabled
                      >
                        <div className="">example</div>
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </td>
              </tr>
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

export default Table;
