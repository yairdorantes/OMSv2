import euroLogo from "../media/128px_Isomagotipo2.png";
const OrderResume = () => {
  return (
    <div className="p-2 ">
      <div className="flex gap-2">
        <div>
          <div className="w-12 h-12 border-2 flex justify-center items-center border-gray-400 rounded-full">
            <img className="w-10" src={euroLogo} alt="" />
          </div>
        </div>
        <div>
          <div className="font-bold text-blue-700">1411550563901-01</div>
          <div className="text-gray-500 text-sm">
            (563901) - 17-02-2024 08:48:10 PM
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div className="grid  grid-cols-1 sm:grid-cols-4   gap-2">
        <div className=" ">
          <div className="bg-gray-200 uppercase text-sm py-1 text-gray-500  text-center rounded-lg">
            Pedido
          </div>
          <ul className="text-sm space-y-1 ml-1 mt-2">
            <li>
              <strong>Orden:</strong> 1411550563901-01
            </li>
            <li>
              <strong>Estatus:</strong> Listo para manejo
            </li>
            <li>
              <strong>Total:</strong> $2,709.00
            </li>
            <li>
              <strong>Fecha:</strong> 17-02-2024 08:48:10 PM
            </li>
            <li>
              <strong>Proscai:</strong> P88049
            </li>
            <li>
              <strong>Clave fact:</strong> null
            </li>
            <li>
              <strong>Ticket:</strong> null
            </li>
          </ul>
        </div>{" "}
        <div className=" ">
          <div className="bg-gray-200 py-1 text-sm uppercase text-gray-500  text-center rounded-lg">
            Cliente
          </div>
          <ul className="text-sm space-y-1 ml-1 mt-2">
            <li>
              <strong>Nombre:</strong> Jesus Alberto Villanueva Salazar
            </li>
            <li>
              <strong>RFC:</strong> N/A
            </li>
            <li>
              <strong>Teléfono:</strong> +528443716658
            </li>
            <li className="truncate">
              <strong>Correo:</strong> albertovillanueva.92@outlook.com
            </li>
          </ul>
        </div>
        <div className=" ">
          <div className="bg-gray-200 py-1 text-sm uppercase text-gray-500  text-center rounded-lg">
            Envio
          </div>
          <ul className="text-sm space-y-1 ml-1 mt-2">
            <li>
              <strong>Paq/Suc:</strong> DHL economy - Zona AD
            </li>
            <li>
              <strong>Id paq/suc:</strong> dhl-econ-zad
            </li>
            <li>
              <strong>Canal:</strong> delivery
            </li>
            <li>
              <strong>Recibe:</strong> Jesus Alberto Villanueva Salazar
            </li>
            <li>
              <strong>Dirección:</strong> Olmecas, 1762, Anáhuac, SALTILLO,
              COAHUILA DE ZARAGOZA, 25130
            </li>
            <li>
              <strong>Guía:</strong> 5003831571
            </li>
            <li>
              <a href="#">Descargar</a>
            </li>
          </ul>
        </div>
        <div className=" ">
          <div className="bg-gray-200 py-1 text-sm uppercase text-gray-500  text-center rounded-lg">
            Pago
          </div>
          <ul className="text-sm space-y-1 ml-1 mt-2">
            <li>
              <strong>Método:</strong> Visa
            </li>
            <li>
              <strong>Envío:</strong> $389.00
            </li>
            <li>
              <strong>Total:</strong> $2,709.00
            </li>
            <li>
              <strong>TID:</strong> 72434333945
            </li>
            <li className="truncate">
              <strong>Transacción:</strong> 73632EC84FA3428395E239D66A87881B
            </li>
            <li className="truncate">
              <strong>Pago:</strong> C557AFE01AF042CE89252125DDDDFD43
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderResume;
