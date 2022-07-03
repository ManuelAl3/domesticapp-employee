import Damagee from "../assets/Support/Damagee.svg";
import Faqs from "../assets/Support/Faqs.svg";
import Helpe from "../assets/Support/Help.svg";
import Notify from "../assets/Support/Notify.svg";
// import Sup from "../assets/Support/Sup.svg";

export const supportOptions = [
  // { id: 1, nombre: "Chat de Soporte", img: Sup, ruta: "" },
  {
    id: 2,
    nombre: "Necesitas ayuda con tu último servicio?",
    img: Helpe,
    ruta: "Help",
  },
  { id: 3, nombre: "Tienes alguna duda?", img: Faqs, ruta: "Faqs" },
  { id: 4, nombre: "Notificaciones", img: Notify, ruta: "Notification" },
  {
    id: 5,
    nombre: "Daño en el Servicio o Accidentes Laborales",
    img: Damagee,
    ruta: "ServiceD",
  },
];
