import Capacitation from "../assets/Profile/Capacitation.svg";
import Certify from "../assets/Profile/Certify.svg";
import Contract from "../assets/Profile/Contract.svg";
import Legal from "../assets/Profile/Legal.svg";
import Notify from "../assets/Profile/Notify.svg";
import Perfil from "../assets/Profile/Perfil.svg";
import Reviews from "../assets/Profile/Reviews.svg";
import Support from "../assets/Profile/Support.svg";

export const CategoryLinks = [
  {
    id: 1,
    icon: Perfil,
    nombre: "Mi Perfil",
    ruta: "MyProfile",
  },
  {
    id: 2,
    icon: Reviews,
    nombre: "Reseñas del Cliente",
    ruta: "Review",
  },
  {
    id: 3,
    icon: Capacitation,
    nombre: "Mis Capacitaciones",
    ruta: "Capacitation",
  },
  { id: 4, icon: Contract, nombre: "Mi Contrato", ruta: "Contract" },
  {
    id: 5,
    icon: Certify,
    nombre: "Certificado Laboral",
    ruta: "Certification",
  },
  { id: 6, icon: Notify, nombre: "Notificaciones", ruta: "Notification" },
  { id: 7, icon: Legal, nombre: "Información Legal", ruta: "LegalInfo" },
  { id: 8, icon: Support, nombre: "Chat de Soporte", ruta: "" },
];
