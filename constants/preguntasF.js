import Covid from "../assets/Faqs/Covid.svg";
import Cuenta from "../assets/Faqs/Cuenta.svg";
import Deudas from "../assets/Faqs/Deudas.svg";
import Dotacion from "../assets/Faqs/Dotacion.svg";
import Ganancias from "../assets/Faqs/Ganancias.svg";
import Pagos from "../assets/Faqs/Pagos.svg";

export const Preguntas = [
  { id: 1, nombre: "Mis ganancias", img: Ganancias, ruta: "ganancias" },
  { id: 2, nombre: "Mis pagos", img: Pagos, ruta: "pagos" },
  { id: 3, nombre: "Mi cuenta", img: Cuenta, ruta: "cuenta" },
  { id: 4, nombre: "Deudas", img: Deudas, ruta: "deudas" },
  { id: 5, nombre: "COVID-19", img: Covid, ruta: "covid" },
  { id: 6, nombre: "Mi Dotación", img: Dotacion, ruta: "dotacion" },
];

export const CategoriasPreguntas = [
  {
    id: 1,
    title: "PQR Ganancias",
    legend: "2.1 FAQS RELACIONADO CON MIS GANANCIAS",
    preguntas: [
      {
        id: 1,
        pregunta:
          "2.1.1 ¿Cómo se calculan mis ganancias estimadas?",
        respuesta:
          "En Domesticapp puedes mantenerte al tanto de "+
          "tus ganancias en todo momento. Recuerda que "+
          "nuestros periodos de nomina son los días 5 y 20 de "+
          "cada mes y allí se refleja el calculo de horas "+
          "trabajadas en ese periodo y las ganancias totales de "+
          "estas luego de deducciones de ley y otros ajustes.",
      }
    ],
  },
  {
    id: 2,
    title: "PQR Cuentas",
    legend: "2.2 FAQS RELACIONADO CON MI CUENTA",
    preguntas: [
      {
        id: 1,
        pregunta: "2.2.1 ¿Cómo solicito un cambio en mi información personal o profesional?",
        respuesta:
          "Si tienes alguna duda, queja o reclamo con "+
          "respecto a la información presente en tu perfil "+
          "profesional o en tu cuenta en general puedes "+
          "comunicarlo mediante el chat de atención 24/7 y "+
          "nuestro equipo evaluara la situación en el menor "+
          "tiempo posible.",
      },
      {
        id: 2,
        pregunta:
          "2.2.2 ¿Qué pasa si me siento inconforme con la reseña presentada por un cliente?",
        respuesta:
          "Domesticapp está comprometido con la dignidad "+
          "laboral en todo momento, es por eso que realizamos "+
          "un seguimiento exhaustivo a todas y cada una de las "+
          "reseñas recibidas por nuestros clientes con el fin de "+
          "mantener un espacio laboral ameno, en caso de que "+
          "se presente una inconsistencia en la evaluación "+
          "recibida está se elimina de forma automática y no "+
          "afecta tu imagen o perfil profesional.",
      },
    ],
  },
  {
    id: 3,
    title: "PQR Covid",
    legend: "2.3 FAQS RELACIONADO CON LA COVID-19",
    preguntas: [
      {
        id: 1,
        pregunta:
          "2.3.1 ¿Cuáles son las políticas de Domesticapp conrespecto a la Covid-19?",
        respuesta: "Tenemos un compromiso inmodificable con la "+
        "salud y el bienestar tanto de nuestros asistentes y "+
        "colaboradores como también con el de nuestros "+
        "clientes, por eso Domesticapp se acoge a todas las "+
        "decisiones e instrucciones de sanidad suministradas "+
        "por los entes reguladores de cada país. Usted NO "+
        "DEBE TRABAJAR si se considera sospechoso a Covid-19 "+
        "u otros virus, rinovirus o infecciones, esto es por su "+
        "salud y bienestar. Siempre contará con todos los "+
        "protocolos de bioseguridad suministrados por nuestra "+
        "compañía",
      },
      {
        id: 2,
        pregunta:
          "2.3.2 ¿Qué protocolos de bioseguridad debo de "+
          "cumplir al realizar mis labores profesionales en "+
          "Domesticapp?",
        respuesta: "Usted debe acatar todos los protocolos de "+
        "sanidad que estén vigentes a la fecha en el lugar "+
        "donde se encuentra laborando, tales como "+
        "cubrebocas, gel antibacterial y/o distanciamiento "+
        "social. Si considera que se incumple la protección a su "+
        "salud o se encuentra por fuera de la normativa "+
        "generada por los entes reguladores de salud publica "+
        "usted está en el DERECHO de negarse a prestar "+
        "cualquier servicio laboral y esto no acarreara sanción "+
        "alguna ni se reflejará como un incumplimiento de sus "+
        "labores como empleado. Su salud y bienestar es "+
        "nuestro mayor compromiso ",
      },
    ],
  },
  {
    id: 4,
    title: "PQR Pagos",
    legend: "2.4 FAQS RELACIONADO CON MIS PAGOS",
    preguntas: [
      {
        id: 1,
        pregunta:
          "2.4.1 ¿Cuáles son los métodos y condiciones para el desembolso de mis pagos?",
        respuesta: "Los cortes de nomina se realizan de forma "+
        "quincenal, los días cinco (5) y veinte (20) de cada mes. "+
        "Los honorarios producto de labores profesionales son "+
        "consignados de forma puntual a las cuentas bancarias "+
        "detalladas por el empleado con su respectivo "+
        "comprobante en adjunto. Domesticap no se hace "+
        "responsable de eventualidades como fallas técnicas o "+
        "problemas con la entidad financiera que retrasen el "+
        "periodo natural de los pagos, sin embargo procura "+
        "evitar siempre este tipo de sucesos. Cualquier "+
        "irregularidad puede ser comunicada en nuestros "+
        "diferentes canales de atención. ",
      },
      {
        id: 2,
        pregunta:
          "2.4.2 ¿Qué descuentos o deducciones se efectúan en mis pagos?",
        respuesta: "Domesticapp cumple las normativas locales e "+
        "internacionales de dignidad laboral, es por eso que "+
        "para garantizar todas las prestaciones y beneficios "+
        "laborales realiza las deducciones que estipula la ley "+
        "vigente de cada país. Usted puede informarse de esto "+
        "en los portales y canales del ministerio de trabajo y/o "+
        "protección social de su país. Si usted tiene otros "+
        "pendientes con la compañía como prestamos o "+
        "adelantos de nomina estos también se verán "+
        "reflejados según lo acuerde con el empleador (Tenga "+
        "en cuenta que estos últimos son acuerdos internos "+
        "entre ambas partes de la relación laboral). "
      },
    ],
  },
  {
    id: 5,
    title: "PQR Deudas",
    legend: "2.5 FAQS RELACIONADO CON MIS DEUDAS",
    preguntas: [
      {
        id: 1,
        pregunta:
          "2.5.1 ¿Cómo puedo acceder a un préstamo por "+
          "calamidad o un adelanto de nomina?",
        respuesta: "Debe radicar la solicitud por escrito, pidiendo el "+
        "respectivo formato por cualquiera de los canales de "+
        "atención (Como el chat de soporte 24/7) y especificar "+
        "de forma detallada los motivos de su petición y estar "+
        "de acuerdo con su posterior descuento de nomina. "+
        "Domesticapp únicamente realiza este tipo de "+
        "procedimientos atendiendo a necesidades de forma "+
        "urgente que puedan presentarse para sus asistentes y "+
        "empleados.",
      },
      {
        id: 2,
        pregunta:
          "2.5.2 ¿Cómo se descuentas mis deudas pendientes "+
          "por prestamos de calamidad o adelanto de "+
          "nomina?",
        respuesta: "Domesticapp realiza los descuentos y "+
        "deducciones automáticamente de su próxima "+
        "quincena (pago de honorarios) o según lo acordado "+
        "en el formato de diligenciamiento.",
      },
    ],
  },
  {
    id: 6,
    title: "PQR Dotación",
    legend: "2.6 FAQS RELACIONADO CON MI DOTACIÓN",
    preguntas: [
      {
        id: 1,
        pregunta:
          "1.6.1 ¿Cuál es la dotación para la prestación de mis servicios y cada cuanto debe ser renovada?",
        respuesta: "Cada servicio cuenta con unas especificaciones "+
        "dotacionales diferentes y según el país donde se "+
        "desarrolla la actividad. Generalmente la dotación "+
        "debe ser renovada cada tres (3) o seis (6) meses por el "+
        "empleador y de acuerdo a la reglamentación."
      },
    ],
  },
];
