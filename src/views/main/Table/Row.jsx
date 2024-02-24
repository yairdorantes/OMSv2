import {
  faCircle,
  faCirclePlus,
  faClone,
  faExternalLink,
  faSquareCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Menu } from "@mantine/core";
import { memo } from "react";
import toast from "react-hot-toast";
import useStore from "../../../Context/ContextApp";
const copyOrderId = (value) => {
  toast.success(`Copiado: ${value}`, { position: "top-right" });
  navigator.clipboard.writeText(value);
};
const getStringStatus = (idStatus) => {
  switch (idStatus) {
    case 1:
      return "Pendiente de pago";
    case 2:
      return "Ventana de cancelación";
    case 3:
      return "Listo para manejo";
    case 4:
      return "Surtiendo";
    case 5:
      return "Surtido";
    case 6:
      return "Empacando";
    case 7:
      return "Empacado";
    case 8:
      return "Embarcado";
    case 9:
      return "Entregado";
    case 10:
      return "Ticket generado";
    case 11:
      return "Facturado";
    case 12:
      return "Solicitud de cancelación";
    case 13:
      return "Cancelado";
    case 14:
      return "Reemplazado";
    case 15:
      return "Incompleto";
    default:
      return "Unknown";
  }
};
function formatToCurrencyMXN(value) {
  const numericValue = parseFloat(value);
  if (!isNaN(numericValue)) {
    return numericValue.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
    });
  } else {
    return "Invalid input";
  }
}
const Row = ({ order, toggleList, list }) => {
  console.log("row rendered");

  return (
    <tr className="even:bg-white odd:bg-gray-200  text-center border-b">
      <td
        onClick={() => toggleList(order.idVtex_order)}
        className="px-2 py-2 bg-white sticky left-0 border border-slate-300"
      >
        <Checkbox checked={list.includes(order.idVtex_order)} />
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
      <td
        onClick={() => {
          console.log("lolas");
          setGlobalData([]);
        }}
        className="px-2 py-2 border border-slate-300 "
      >
        <img
          src="https://creaprac.com/wp-content/uploads/2022/03/mexico.png"
          alt=""
          className="w-8 mx-auto"
        />
      </td>
      <td className="px-5 cursor-pointer py-2   text-blue-600 font-semibold whitespace-nowrap border">
        {order.idVtex_order}(563315)
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
        <FontAwesomeIcon icon={faCircle} className="w-3 h-3 text-teal-500" />
      </td>
      <td className="px-6 py-2 border whitespace-nowrap border-slate-300">
        {getStringStatus(order.status2_order)}
      </td>
      <td className="px-6 py-2 border whitespace-nowrap capitalize border-slate-300">
        {order.receiverName_order.toLowerCase()}
      </td>
      <td className="px-6 whitespace-nowrap py-2 border border-slate-300">
        {order.courier_order}
      </td>
      <td className="px-6 py-2 border border-slate-300">
        {order.qtyItems_order}
      </td>
      <td className="px-6 py-2 border border-slate-300">
        {formatToCurrencyMXN(order.total_order)}
      </td>
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
  );
};

export default Row;
