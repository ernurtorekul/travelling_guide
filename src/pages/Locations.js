import "./Locations.css";
import himachal from "../media/himachalbg.jpg";
import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/keralabg.jpg";
import maldives from "../media/himachalbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";

import aishabibi from "../media/aishabibi/aishabibi1.jpg";
import kishmish from "../media/kishmish/kishmish1.jpg";
import merke from "../media/merke/merkesanatori1.jpg";
import tekturmas from "../media/tekturmas/tekturmas1.jpeg";

import shu from "../media/shu/shu1.jpg";
import talas from "../media/talas/talas1.jpg";
import zhaysan from "../media/zhaysan/zhaysan.jpg";
import akyrtas from "../media/akyrtas/akyrtas.jpg";

import karakonyz from "../media/karakonyz/karakonyz.jpg";
import kalizhusip from "../media/kalizhusip/kalizhusip.jpg";
import zhambylhotel from "../media/zhambylhotel/zhambylhotel.avif";
import zhasminehotel from "../media/zhasminehotel/zhasminehotel.jpg";

import aksu from "../media/aksu/aksu1.jpg";
import kordai from "../media/kordai/kordai1.JPG";
import zhualy from "../media/zhualy/zhualy1.jpg";
import turar from "../media/turar/turar1.jpg";


import { PackageCard } from "../components/PackageCard";
import { Searchbox } from "../components/Searchbox";
import { useState, useEffect } from "react";

export const Locations = () => {
           
  const packageInfoRow1 = [
    {
      place: "Merke",
      info: "'Мерке шипажайы' Мерке аудан орталығынан 12 км қашықтықта орналасқан және Қырғыз Алатауының кең Меркі шатқалында, теңіз деңгейінен 750 м биіктікте орналасқан.",
      img: merke,
      // price: "4000-5000 INR",
    },
    {
      place: "Shu",
      info: "Шу ауданы — Жамбыл облысының оңтүстік-шығысында орналасқан әкімшілік бөлік. Мойынқұм, Қордай, Меркі, Жамбыл аудандарымен және Қырғызстан Республикасымен шекаралас жатыр.",
      img: shu,
      // price: "4000-5000 INR",
    },
    {
      place: "Talas",
      info: "Аудан жері, негізінен, жазық, тек оның қиыр оңтүстік - батысы ғана таулы. Мұнда Қаратау жотасының оңтүстік - шығыс бөлігі орналасқан.",
      img: talas,
      // price: "4000-5000 INR",
    },
    {
      place: "Aksu-Zhabagaly",
      info: "Ақсу-Жабағылы қорығы — Талас Алатауының (Батыс Тянь-Шань) солтүстік-батыс бөлігін және Өгем жотасын алып жатқан Қазақстандағы тұңғыш қорық.",
      img: aksu,
      // price: "4000-5000 INR",
    },
    {
      place: "Zhualy",
      info: "Жуалы ауданы Теріс (Асы) өзенінің жоғары және орта ағысында, жерінің басым бөлігін Жуалы таулы үстірті (биіктігі орталығында 900 м, шет жақтарында 1200 м) алып жатыр.",
      img: zhualy,
      // price: "4000-5000 INR",
    },
    {
      place: "Kulan",
      info: "Тұрар Рысқұлов ауданы — Жамбыл облысының оңтүстігінде орналасқан әкімшілік-аумақтық бөлініс. 1938 жылы Луговой ауданы болып құрылған.",
      img: turar,
      // price: "4000-5000 INR",
    },
    {
      place: "Kordai",
      info: "Қордай ауданының жері негізінен таулы. Климаты континенттік, қысы-жазы жиі-жиі Қордай желі соғып тұрады.",
      img: kordai,
      // price: "4000-5000 INR",
    },
    {
      place: "Aisha-Bibi",
      info: "'Айша бибі' кесенесі — ХІ-XII ғасырлардағы сәулет өнерінің көрнекті ескерткіші. Жамбыл облысы Жамбыл ауданында Айша бибі ауылында орналасқан.",
      img: aishabibi,
      // price: "4000-5000 INR",
    },
    {
      place: "Tekturmas",
      info: "'Тектұрмас' – ежелгі қаланың алтын көпірі. Тау басында тұрған этно-тарихи кешен. Тектұрмас – ежелгі қаланың алтын көпірі.",
      img: tekturmas,
      // price: "4000-5000 INR",
    },
    {
      place: "Karakonyz shatkaly",
      info: "«Қарақоңыз шатқалы» мемлекеттік ботаникалық табиғат заказнигі Іле Алатауының батыс жағын және Қарақоңыз өзенінің таулы бөліктерін қамтиды",
      img: karakonyz,
      // price: "4000-5000 INR",
    },
    {
      place: "Zhaysan",
      info: "Жайсан әулиелігі – түркілер діни мемориалдар кешені Жер-Су тәңірі символы - Су ұғымынан шыққан Шу өзенінің аңғарында орналасқан.",
      img: zhaysan,
      // price: "4000-5000 INR",
    },
    {
      place: "Kali-Zhunis monshasy",
      info: "Ғимаратты XIX ғасырдың аяғында қазіргі Тараз қаласының аумағында Әулие Ата қаласының тұрғындары салған.",
      img: kalizhusip,
      // price: "4000-5000 INR",
    },
    {
      place: "Akyrtas",
      info: "Ақыртас — Жамбыл облысының Тұрар Рысқұлов ауданында орналасқан сарай кешені. VIII-IX ғасырларда салынған. Ақыртас соңғы 130 жыл бойы зерттеліп келеді.",
      img: akyrtas,
      // price: "4000-5000 INR",
    },
    {
      place: "Zhambyl hotel",
      info: "Жамбыл қонақ Үйі-Таразда тұру үшін тамаша таңдау. Қонақтар спа қызметтерін пайдаланады, содан кейін мейрамханада тамақ ішеді. Басқа ыңғайлылықтарға бар / демалыс бөлмесі және сауна кіреді.",
      img: zhambylhotel,
      // price: "4000-5000 INR",
    },
    {
      place: "Zhasmine hotel",
      info: "Жасмин-Тараз қаласындағы қонақ үй. Бүкіл аумақта бақша, бар және тегін Wi-Fi бар. Меншікте жеке автотұрақ бар. Бөлмелерде үстел мен шайнек, душ және тегін дәретхана керек-жарақтары бар.",
      img: zhasminehotel,
      // price: "4000-5000 INR",
    },
  ];

  const [searchField, setSearchField] = useState("");
  const [places, setPlaces] = useState(packageInfoRow1);
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  useEffect(() => {
    const newfilteredPlaces = places.filter((place) => {
      return place.place.toLocaleLowerCase().includes(searchField);
    });

    setFilteredPlaces(newfilteredPlaces);
  }, [places, searchField]);

  const handleOnChange = (e) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearchField(search);
  };
  return (
    <>
      <section className="packages">
        <div className="package-container">
          <h2>
            Барлық локациялар
            <hr />
          </h2>
          <Searchbox handleOnChange={handleOnChange} />

          <div className="p-row">
            {filteredPlaces.map((element) => {
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
        </div>
      </section>
    </>
  );
};
