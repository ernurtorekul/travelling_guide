import "./PackageSection.css";
import { Link } from "react-router-dom";
import { PackageCard } from "./PackageCard";
import himachal from "../media/himachalbg.jpg";

import aishabibi from "../media/aishabibi/aishabibi1.jpg";
import kishmish from "../media/kishmish/kishmish1.jpg";
import merke from "../media/merke/merkesanatori1.jpg";
import tekturmas from "../media/tekturmas/tekturmas1.jpeg";

import aksu from "../media/aksu/aksu1.jpg";
import kordai from "../media/kordai/kordai1.JPG";
import zhualy from "../media/zhualy/zhualy1.jpg";
import turar from "../media/turar/turar1.jpg";

import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/keralabg.jpg";
import maldives from "../media/himachalbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";

export const PackageSection = () => {
  const packageInfoRow1 = [
    {
      place: "Aisha-Bibi",
      info: "'Айша бибі' кесенесі — ХІ-XII ғасырлардағы сәулет өнерінің көрнекті ескерткіші. Жамбыл облысы Жамбыл ауданында Айша бибі ауылында орналасқан.",
      img: aishabibi,
      price: "8000-15000 tg",
    },
    {
      place: "Merke",
      info: "'Мерке шипажайы' Мерке аудан орталығынан 12 км қашықтықта орналасқан және Қырғыз Алатауының кең Меркі шатқалында, теңіз деңгейінен 750 м биіктікте орналасқан.",
      img: merke,
      price: "20000-50000 tg",
    },
    {
      place: "Tekturmas",
      info: "'Тектұрмас' – ежелгі қаланың алтын көпірі. Тау басында тұрған этно-тарихи кешен. Тектұрмас – ежелгі қаланың алтын көпірі.",
      img: tekturmas,
      price: "4000-10000 tg",
    },
    {
      place: "Kishmish",
      info: "'Kishmish' шайханасы-бұл ең алдымен Шығыс әлеміне, содан кейін ұйғыр, еуропалық, итальяндық және жапондық тағамдар әлеміне енетін орын.",
      img: kishmish,
      // price: "2000 tg + ",
    },
  ];
  const packageInfoRow2 = [
    {
      place: "Aksu Zhabagaly",
      info: "'Ақсу-Жабағылы' қорығы — Талас Алатауының (Батыс Тянь-Шань) солтүстік-батыс бөлігін және Өгем жотасын алып жатқан Қазақстандағы тұңғыш қорық.",
      img: aksu,
      // price: "4000-5000 INR",
    },
    {
      place: "Zhualy",
      info: "'Жуалы ауданы' Теріс (Асы) өзенінің жоғары және орта ағысында, жерінің басым бөлігін Жуалы таулы үстірті (биіктігі орталығында 900 м, шет жақтарында 1200 м) алып жатыр.",
      img: zhualy,
      // price: "4000-5000 INR",
    },
    {
      place: "Kulan",
      info: "'Тұрар Рысқұлов' ауданы — Жамбыл облысының оңтүстігінде орналасқан әкімшілік-аумақтық бөлініс. 1938 жылы Луговой ауданы болып құрылған.",
      img: turar,
      // price: "4000-5000 INR",
    },
    {
      place: "Kordai",
      info: "'Қордай' ауданының жері негізінен таулы. Климаты континенттік, қысы-жазы жиі-жиі Қордай желі соғып тұрады.",
      img: kordai,
      // price: "4000-5000 INR",
    },
  ];
  return (
    <>
      <div className="container3">
        <section className="packages" id="packages">
          <h1>Топ 4 туристік мекендер!</h1>
          <div className="outerbox">
            <hr/>
            {/* <h2>
              Domestic
              <hr />
            </h2> */}
            <div className="row1">
              {packageInfoRow1.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
            <h2>
              Жамбыл облысы аудандары
              <hr />
            </h2>
            <div className="row2">
              {packageInfoRow2.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
            <div className="morebtn">
              <Link to="/locations">
                <button className="more-btn">Толығырақ</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
