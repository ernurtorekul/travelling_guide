import "./Dubai.css";
import { TravelCard } from "../../../components/locations/TravelCard";
import { DubaiImages } from "../../../media/dubai/d_images";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";

import aishabibi from "../../../media/aishabibi/aishabibi1.jpg";
import kishmish from "../../../media/kishmish/kishmish1.jpg";
import zhambylhotel from "../../../media/zhambylhotel/zhambylhotel.avif";
import zhasminehotel from "../../../media/zhasminehotel/zhasminehotel.jpg";
import basilic from "../../../media/basilic/basilic.webp";
// import merke from "../media/merke/merkesanatori1.jpg";
// import tekturmas from "../media/tekturmas/tekturmas1.jpeg";
import { Link } from "react-router-dom";
export const Dubai = () => {
  const placeInfo = [
    {
      placeName: "Aisha-Bibi",
      tagline: "Тарих Шақыратын Және Аңыздар Сыбырлайтын Жерде",
      desc: "Aisha-Bibi-ні әлемдік деңгейдегі туризммен және керемет арнайы бағыттармен ашыңыз. Таңдаудың кең ауқымын зерттеп, сапарыңызды жоспарлауды қазірден бастаңыз!",
    },
  ];
  const packageInfo = [
    {
      img: zhasminehotel,
      location: "Zhasmine hotel",
      // price: "INR 4999",
      desc: "Жасмин-Тараз қаласындағы қонақ үй. Бүкіл аумақта бақша, бар және тегін Wi-Fi бар. Меншікте жеке автотұрақ бар. Бөлмелерде үстел мен шайнек, душ және тегін дәретхана керек-жарақтары бар.",
    },
    {
      img: zhambylhotel,
      location: "Zhambyl hotel",
      // price: "INR 4999",
      desc: "Жамбыл қонақ Үйі-Таразда тұру үшін тамаша таңдау. Қонақтар спа қызметтерін пайдаланады, содан кейін мейрамханада тамақ ішеді. Басқа ыңғайлылықтарға бар / демалыс бөлмесі және сауна кіреді.",
    },
    {
      img: kishmish,
      location: "Kishmish",
      // price: "INR 4999",
      desc: "'Kishmish' шайханасы-бұл ең алдымен Шығыс әлеміне, содан кейін ұйғыр, еуропалық, итальяндық және жапондық тағамдар әлеміне енетін орын.",
    },
    {
      img: basilic,
      location: "Basilic",
      // price: "INR 4999",
      desc: "Basilic – ең жаңа өнімдерден дәмді және дұрыс тағам дайындалатын жер. Сіздің табағыңыздағы тағамның сапасы-біздің басымдығымыз!",
    },
  ];
  return (
    <>
      <div className="t-container">
        {placeInfo.map((place) => {
          return (
            <TravelCard
              name={place.placeName}
              tagline={place.tagline}
              desc={place.desc}
            />
          );
        })}
      </div>

      <div className="t-info">
        <h2>
          <span id="diff">С</span>із білуіңіз керек барлық нәрсе
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">С</span>апарыңызды жоспарлауды бастаңыз!
                  <hr />
                </h2>
                <p>
                Aisha-bibi сізді жаңа естеліктер мен тәжірибелермен , таңғажайып көріністермен, мистикалық оқиғалармен қайта қарсы алуға дайын.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={DubaiImages.do2} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={DubaiImages.dp1} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="cultures">
          <span id="fdiff">М</span>әдениет
          <hr />
        </h2>

        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={DubaiImages.dp3} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={DubaiImages.dp4} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">Ш</span>ынайы тарих
                  <hr />
                </h2>
                <p>
                  Айша бибі-қазіргі Қазақстанда Орналасқан, Айша бибі есімді жұмбақ әйелге арналған кесенесімен әйгілі, қастерлі тарихи орын. 11 ғасырда салынған деп есептелетін кесене күрделі тастан қашалған оюлармен және сәндік элементтермен безендірілген сәулет өнерінің кереметі болып табылады. Аңыз бойынша, Айша бибі кесененің құрылысына қайғылы махаббат хикаясы шабыт берген сұлу әйел болған. 
                </p>
                <p>
                  Оның өмірі туралы аз мәлімет болса да, оның мұрасы келушілерді өзінің мәңгілік сұлулығымен және жұмбақ тарихымен баурап алуды жалғастыратын осы керемет ескерткіштің арқасында өмір сүруді жалғастыруда.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        {/* <h2 className="heading" id="beaches">
          <span id="fdiff">B</span>eaches
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est beaches to visit
                  <hr />
                </h2>
                <p>
                  Abu Dhabi is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={DubaiImages.db1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={DubaiImages.db2} alt={""} id="port2" />
            </div>
          </div>
        </div> */}
        <hr id="line" />
        <h2 className="heading" id="hotels">
          <span id="fdiff">Қ</span>онақ-үйлер
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={DubaiImages.dh1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={DubaiImages.do1} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">C</span>із үшін ең жақсы қонақ үйлер
                  <hr />
                </h2>
                <p>
                Aisha-Bibi ашық және жаңаларын жасау үшін сізді тағы да қарсы алуға дайын көрнекті қонақүйлермен , сәнді сауда орталықтарымен естеліктер мен тәжірибелерімен.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">Т</span>ек қана Айша-Бибіде
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">Қ</span>ызықты іс-шаралар
                  <hr />
                </h2>
                <p>
                Айша бибінің мистикасына үңіліңіз, онда сіз күрделі кесенені зерттей аласыз, жергілікті базарлардан көне әшекей заттарын ала аласыз және ғасырлар бойғы тарихты білімді гидтермен ашып, қазақстанның мәдени мұрасының жүрегіне саяхат жасай аласыз.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={DubaiImages.dp2} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={DubaiImages.dh2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <div className="more">
          <h2 className="heading">
            Гид-қа не кіреді?
            <hr id="line" />
          </h2>

          <div className="cont">
            <p>
            Экскурсия: Айша бибінің таңғажайып кесенесін білімді гидтермен зерттеңіз.
            </p>
            <p>
            Шопинг: дәстүрлі қолөнер бұйымдары мен мәдени артефактілерді іздеу үшін жергілікті базарларды шолыңыз.
            </p>
            <p>
            Мәдени иммерсия: тағамдар мен иммерсивті іс-шаралар арқылы Қазақстандық мұраны сезіну.
            </p>
            <p>
              Тарихи Барлау: Айша бибінің әшекейленген бөлмелерінде жасырылған ғасырлық оқиғаларды ашыңыз.
            </p>
            <p>
              Сарапшыларға арналған нұсқаулық: жергілікті сарапшылардың терең пікірлері мен нұсқаулықтарын Пайдаланыңыз.
            </p>
            <p>
              Тасымалдау: Біздің маршрутпен еш қиындықсыз саяхаттау.
            </p>
          </div>
        </div>
      </div>
      <hr id="line" />
      <div className="container3" id="packages">
        <section className="packages">
          <h2>Сіз үшін ең жақсы ұсыныстар</h2>
          <div className="outerbox">
            <div className="row1">
              {packageInfo.map((pack) => {
                return (
                  <PackCard
                    img={pack.img}
                    loc={pack.location}
                    price={pack.price}
                    desc={pack.desc}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <hr id="line" />

      <div className="container5" id="contact">
        <section className="t-contact">
          <h1>Жақындарыңа қуаныш сыйла!</h1>
          <div className="rowlast">
            <div className="contimg">
              <img src={contactimg} alt={""} id="contimg" />
            </div>

            <div className="box">
              <h2>
              Билеттерге тапсырыс бер
                <hr />
              </h2>

              <p>
              Армандаған сапарыңызға бір қадам жақындаңыз !
              </p>
              <Link to="/book">
                <div className="btn">
                  <button className="book-btn">Тапсырыс беру</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
