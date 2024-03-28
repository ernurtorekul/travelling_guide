import "./Services.css";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const serviceInfoRow1 = [
    {
      header: "Ең Жақсы Маршруттар",
      info: "Біздің аймақтың сұлулығын көрсетуге арналған қолмен таңдалған маршруттарымызды таңдаңыз.",
      icon: "fas fa-bus",
    },
    {
      header: "Үздік Ұсыныстар",
      info: "Біздің кең желімізден және 50-ден астам жетекші туристік орындармен серіктестігіміз арқылы турлар мен тәжірибелерге жеңілдіктерді пайдаланыңыз.",
      icon: "fas fa-rupee-sign",
    }
  ];
  const serviceInfoRow2 = [
    {
      header: "Тамақ Және Сусындар",
      info: "Біздің аймақтың бай дәмін әр түрлі асхана нұсқаларымен тамашалаңыз.",
      icon: "fas fa-utensils",
    },
    {
      header: "Қонақ үйлер",
      info: "Сәнді курорттардан бастап бюджеттік опцияларға дейін біз сіздің қажеттіліктеріңізге және қалауларыңызға сәйкес келетін әртүрлі қонақүйлерді ұсынамыз.",
      icon: "fas fa-hotel",
    },
    {
      header: "Қауіпсіз Саяхат",
      info: "Сіздің қауіпсіздігіңіз біз үшін өте маңызды. Қауіпсіздіктің ең жоғары стандарттарын сақтай отырып, тәжірибелі гидтер мен сенімді тасымалдауды қамтамасыз етеміз.",
      icon: "fas fa-clinic-medical",
    },
  ];

  return (
    <>
      <div className="container4">
        <section className="service" id="services">
          <h1>Біз ұсынамыз!</h1>
          <div className="row2">
            {serviceInfoRow1.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
          <div className="row1">
            {serviceInfoRow2.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
