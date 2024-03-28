import "./Bookform.css";
import emailjs from "@emailjs/browser";

export const BookForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ovl2n1s",
        "template_ctlgwz2",
        e.target,
        "QT5ltA7BuoH7IMiRu"
      )
      .then(
        (result) => {
          alert("Билет сұранысы орналастырылды! Бізден хабар күтіңіз.");
        },
        (error) => {
          alert("Қате орын алды! Кейінірек қайталап көріңіз.");
        }
      );
    e.target.reset();
  };
  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="inputbox">
          <h3>Аты-жөніңіз*</h3>
          <input type="text" placeholder="аты жөн" required name="name" />
        </div>
        <div className="inputbox">
          <h3>email почта*</h3>
          <input
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            name="email"
          />
        </div>
        <div className="inputbox">
          <h3>Байланыс телефоны*</h3>
          <input
            type="tel"
            placeholder="номер"
            required
            maxlength="15"
            name="contact"
          />
        </div>
        <div className="inputbox">
          <h3>Қайда барғыңыз келеді?*</h3>
          <input
            type="text"
            placeholder="адрес"
            required
            name="destination"
          />
        </div>

        <div className="inputbox">
          <h3>Адам санын енгізіңіз</h3>
          <input
            type="number"
            min="1"
            placeholder="1.."
            required
            name="people"
          />
        </div>
        <div className="inputbox">
          <h3>Келу күні</h3>
          <input type="date" id="cap" required name="arrival" />
        </div>
        <div className="inputbox">
          <h3>Кету күні</h3>
          <input type="date" id="cap" required name="dept" />
        </div>
        <div className="sub-btn">
          <button type="submit" className="subbtn">
            Тапсырыс беру
          </button>
        </div>
      </form>
    </>
  );
};
