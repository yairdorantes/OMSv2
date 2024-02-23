// import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import {
  faPrint,
  faSyncAlt,
  faSave,
  faFile,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ButtonsContainer = () => {
  let buttos = [
    {
      name: "Imprimir",
      icon: faPrint,
      onClick: () => console.log("imprimir"),
    },
    {
      name: "Estatus",
      icon: faSyncAlt,
      onClick: () => console.log("sync..."),
    },
    {
      name: "Reporte",
      icon: faSave,
      onClick: () => console.log("save..."),
    },
    {
      name: "Manifiesto",
      icon: faFile,
      onClick: () => console.log("save..."),
    },
    {
      name: "Marbete",
      icon: faTag,
      onClick: () => console.log("save..."),
    },
    {
      name: "Paypal",
      icon: faPaypal,
      onClick: () => console.log("save..."),
    },
  ];

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2">
        {buttos.map((button, i) => (
          <div
            key={i}
            onClick={button.onClick}
            className="bg-gray-100 text-gray-500 transition-all hover:bg-blue-700 hover:text-white cursor-pointer select-none flex justify-center items-center flex-col border border-gray-300 shadow-md rounded-2xl h-16 w-20 "
          >
            <div>
              <FontAwesomeIcon icon={button.icon} className="w-5 h-5" />
            </div>
            <div className="text-xs">{button.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonsContainer;
